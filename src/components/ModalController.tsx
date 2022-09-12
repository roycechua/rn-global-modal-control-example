import { MutableRefObject } from "react";

export type CustomModalRef = {
    show: () => void
    hide: () => void
}

export default class ModalController {
	static modalRef: MutableRefObject<CustomModalRef>;
    static setModalRef = (ref: any) => {
        this.modalRef = ref
    }

	static showModal = () => {
        console.log("show modal")
		this.modalRef.current?.show();
	};
    static hideModal = () => {
        console.log("hide modal")
		this.modalRef.current?.hide();
	};
}
