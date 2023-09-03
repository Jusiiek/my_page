import {Modal, Row, Col} from "antd";

import {WindowSize} from "@/helpers/window_size";
import {CONFIG} from "@/config/config";
import {useLanguage} from "@/providers/language_provider";
import {useAnimate} from "framer-motion";

export default function LangModal({showModal, closeModal}: {showModal: boolean, closeModal: Function}) {
    const {translate, switchLanguage} = useLanguage();
    const windowSize = WindowSize();
    const columnsSpan = windowSize.width <= CONFIG.BREAK_POINT - 200 ? 24 : 12

    const [scope, animate] = useAnimate()

    const changeLanguage = (lang: string) => {
        switchLanguage(lang);
        closeModal()
    }
    const onButtonClick = (className: string, lang: string) => {
        animate([
            [`.${className}`, {scale: .6}, {duration: .1}],
            [`.${className}`, {scale: 1}, {duration: .1}]
        ])
        setTimeout(() => {
            changeLanguage(lang)
        }, 150)
    }

    return (
        <Modal open={showModal} footer={null} onCancel={() => closeModal()}>
            <Row className={'w-100 text-center'}>
                <h2 className={'title ml-auto mr-auto'}>
                    {translate('languages.change_language')}
                </h2>
            </Row>
            <Row className={'w-100 mt-6'} ref={scope}>
                <Col span={columnsSpan} className={'text-center mb-4'}>
                    <button className={'lang-modal-btn lang-en'} onClick={() => onButtonClick('lang-en', 'en')}>
                        {translate('languages.english')}
                    </button>
                </Col>
                <Col span={columnsSpan} className={'text-center'}>
                    <button className={'lang-modal-btn lang-pl'} onClick={() => onButtonClick('lang-pl', 'pl')}>
                        {translate('languages.polish')}
                    </button>
                </Col>
            </Row>
        </Modal>
    )
}
