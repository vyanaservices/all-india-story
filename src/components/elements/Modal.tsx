import React, { useEffect } from "react";
import Portal from "./Portal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <Portal>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          // onTap={onClose}
          className="fixed inset-0 z-[99999999] grid cursor-pointer place-items-center overflow-y-scroll bg-black/10 backdrop-blur-sm"
          // style={{
          //   position: "fixed",
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          //   zIndex: 50,
          //   display: "grid",
          //   placeItems: "center",
          //   overflowY: "scroll",
          //   backgroundColor: "rgba(0, 0, 0, 0.1)",
          //   backdropFilter: "blur(0.5rem)",
          //   padding: "2rem",
          // }}
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            // onTap={(e: any) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute right-3 top-3 z-[9999999] text-2xl text-bg1 duration-300 hover:text-red-600"
              onClick={onClose}
            >
              <AiOutlineCloseCircle />
            </button>
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Portal>
  );
}

{
  /* <div
  className="fixed inset-0 flex animate-fadeIn items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
  onClick={onClose}
>
  <div
    data-aos="zoom-in-down"
    className="relative rounded-lg bg-white p-6 shadow-lg"
    onClick={(e) => e.stopPropagation()}
  >
    <button
      className="absolute right-5 top-5 z-10 text-2xl text-orange-500 md:-right-7 md:-top-6"
      onClick={onClose}
    >
      <AiOutlineCloseCircle />
    </button>
    {children}
  </div>
</div>; */
}
