import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

interface ModalProps {
    title?: string;
    open: boolean;
    onOk?: () => void;
    onCancel?: () => void;
    children: React.ReactNode;
}

const LXModal: React.FC<ModalProps> = ({ title, open, onOk, onCancel, children }) => {
    if (!open) return null;
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);
    return (
        <div className="fixed inset-0 z-1000 outline-0 bg-black/45 h-auto m-0 p-0 ">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.12, 0.4, 0.29, 1.46] }} >
                    <div className="relative top-20 mx-auto bg-white py-5 px-6 rounded-lg shadow-lg w-lg origin-[459px_269px] z-1001 overflow-auto ">
                        <div className="outline-none">
                            <div className=" bg-white bg-clip-padding border-0 rounded-lg">
                                <button className="absolute z-1010 w-8 right-2 top-4" onClick={onCancel}>
                                    <span className="flex justify-center items-center">
                                        <span className="flex justify-center">
                                            <svg className="text-black" fillRule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="0.8em" height="0.8em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>
                                        </span>
                                    </span>
                                </button>
                                {title && <div className="text-black/85 font-semibold text-base mb-[8px]"> {title}</div>}
                                <div className="text-sm leading-[1.57]">{children}</div>
                                {(onOk && onCancel) && < div className="flex justify-end space-x-2 mt-[12px]">
                                    <button className="flex justify-center items-center border rounded-sm border-gray-300 text-sm  text-black/85 bg-white py-1 px-3" onClick={onCancel}>
                                        <span>Cancel</span>
                                    </button>
                                    <button className="flex justify-center items-center text-white rounded-sm bg-[rgb(22,119,225)] py-1 px-3" onClick={onOk}>
                                        <span>OK</span>
                                    </button>
                                </div>}

                            </div>

                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div >
    )
}
export default LXModal;