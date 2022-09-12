import { MutableRefObject } from "react";

export type CustomModalRef = {
    show: (message?: string) => void
    hide: () => void
}

export default class ModalController {
	static modalRef: MutableRefObject<CustomModalRef>;
    static setModalRef = (ref: any) => {
        this.modalRef = ref
    }

	static showModal = (message?: string) => {
        console.log("show modal")
		this.modalRef.current?.show(message);
	};
    static hideModal = () => {
        console.log("hide modal")
		this.modalRef.current?.hide();
	};
}
