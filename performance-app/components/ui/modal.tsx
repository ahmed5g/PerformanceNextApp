"use client"

import { Dialog, DialogContent, DialogHeader , DialogDescription, DialogTitle} from "./dialog";

interface ModalProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, description, children, isOpen, onClose }) => {
    const onChange = (open: boolean): void => {
        if (!open) {
            onClose();
        }
    };

return (
    <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent>
           <DialogHeader>
            <DialogTitle>
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
            
                    {children}
                
            </DialogTitle>
            </DialogHeader> 
        </DialogContent>

    </Dialog>
);
};