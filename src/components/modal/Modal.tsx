import React from "react";
import { BiCopy } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { LuLink } from "react-icons/lu";
import { PiPinterestLogo } from "react-icons/pi";

interface ModalProps {
  handleShareFacebook: () => void;
  handleShareTwitter: () => void;
  handleSharePinterest: () => void;
  handleShareLinkedIn: () => void;
  onClose: () => void;
  open: boolean;
  selfURL: string;
}

const Modal: React.FC<ModalProps> = ({
  handleShareFacebook,
  handleShareLinkedIn,
  handleSharePinterest,
  handleShareTwitter,
  open,
  selfURL,
  onClose,
}) => {
  const handleCopyLink = () => {
    const listener = (e: ClipboardEvent) => {
      e.clipboardData?.setData("text/plain", selfURL);
      e.preventDefault();
      document.removeEventListener("copy", listener);
    };
    document.addEventListener("copy", listener);
    document.execCommand("copy");
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center 
    transition-colors ${open ? "visible bg-black/20" : "invisible"}
    `}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-3 w-80
        transition-all max-w-md 
        ${open ? "scale-100 opacity-100" : "scale-110 opacitiy-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="mt-3 ml-1 text-xl font-bold">Share article</p>
          <CgClose onClick={onClose} />
        </div>

        <div className="flex flex-col">
          <div className="pt-3 border-t">
            <p className="ml-1">Share this article via</p>
          </div>
          <div className="flex justify-center h-full gap-8 mt-10 pb-7">
            <button
              className="p-2 border border-black rounded-full hover:bg-gray-200"
              onClick={handleShareFacebook}
            >
              <FaFacebook className="w-7 h-7" />
            </button>
            <button
              className="p-2 border border-black rounded-full hover:bg-gray-200"
              onClick={handleShareTwitter}
            >
              <BsTwitterX className="w-7 h-7" />
            </button>
            <button
              className="p-2 border border-black rounded-full hover:bg-gray-200"
              onClick={handleSharePinterest}
            >
              <PiPinterestLogo className="w-7 h-7" />
            </button>
            <button
              className="p-2 border border-black rounded-full hover:bg-gray-200"
              onClick={handleShareLinkedIn}
            >
              <LiaLinkedin className="w-7 h-7" />
            </button>
          </div>
          <div>
            <p className="mb-2 ml-1 text-sm">Or copy link</p>
            <div className="flex items-center p-2 border rounded-lg">
              <LuLink className="mr-2 h-7 w-7" />
              <p className="truncate">{selfURL}</p>
              <BiCopy
                className="h-7 w-7 hover:bg-gray-50"
                onClick={handleCopyLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
