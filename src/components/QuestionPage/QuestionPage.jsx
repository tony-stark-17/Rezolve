import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import toast, { Toaster } from 'react-hot-toast';
import COET from '../../assets/coet.svg'
import Logo from '../../assets/mulearn.svg'
import Rezolve from '../../assets/rezolve.svg'


import classes from './QuestionPage.module.css';

const QuestionPage = ({ index }) => {
    const questions = useLoaderData();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [answers, setAnswers] = useState();
    const [link, setLink] = useState('');
    const [img, setImg] = useState('');
    useEffect(()=>{
        setQuestion(questions[index].question);
        setAnswers(questions[index].answers);
        setLink(questions[index].link);
        if(questions[index].imgLink){
            setImg(questions[index].imgLink);
        }
    }, [])

    const notify = (msg, type) =>{
        toast(msg, {
            position: 'bottom-right',
            style:{
                borderRadius: '10px',
                background: type == 'success' ? '#3d9a3d' : '#ff4d4d',
                color: 'white',
                padding: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                fontSize: '16px',
                fontWeight: '500'
            }
        });
    }

    const SubmitAnswer = () =>{
        if(answers.includes(answer.toLowerCase())){
            onOpen();
        }else{
            notify('Wrong Answer!', 'error');
        }
    }
    
    const redirect = () =>{
        window.open(link, '_blank');
        onClose();
    }

    return(
        <div className={`bg-slate-100 flex flex-col w-screen h-screen items-center py-5`}>
            <div className={`bg-slate-100 ${classes['header']}`}>
                    <img src={COET} alt="COET" className={classes['college-logo']}/>
                    <img src={Rezolve} alt="Rezolve" className={classes['logo']}/>
                    <img src={Logo} alt="Logo" className={classes['mu-logo']}/>
            </div>
            <div className="w-screen h-full flex flex-col justify-center items-center">
                <div className={classes['question']}>
                    {question}
                </div>
                {img != '' && <img src={img} alt="Question" className="max-w-[60%] rounded-3xl object-contain"/>}
                <Input label="Answer" className="w-[50%] mt-10" size="lg" classNames={{
                    inputWrapper: 'bg-slate-200 active:bg-slate-200 focus-within:!bg-slate-200',
                }} endContent={
                    <button className="mb-2" onClick={SubmitAnswer}>
                        <Icon icon="akar-icons:arrow-right" className="text-[#fc6f09] hover:text-[#7048ff] hover:scale-125 transition-all ease-in-out" width="20" height="20"/>
                    </button>
                } onInput={(e) => setAnswer(e.target.value)} onKeyDown={(e) => (e.code == 'Enter') && SubmitAnswer()}/>
            </div>
            <Modal isOpen={isOpen} backdrop="blur" isDismissable={false} onClose={onClose}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 text-xl text-[#fc6f09]">You have passed this level!</ModalHeader>
                    <ModalBody>
                        <p>
                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" variant="flat" onPress={redirect}>
                            <Icon icon="ic:baseline-whatsapp" width="1.4em" height="1.4em"/>
                            Group Link
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
            <Toaster />
        </div>
    )
}

export default QuestionPage;