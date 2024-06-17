import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MailList = (props) => {
  let { id, mail, label } = props;
  const email = useSelector((state) => state.auth.loggedUser);

  const handleClick = async () => {
    if (mail.read === false) {
      await fetch(
        `https://mymail-app-default-rtdb.firebaseio.com/${email.replace(
          ".",
          ""
        )}/receivedMails/${id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({ ...mail, read: true }),
        }
      );
    }
  };

  return (
    <Link
      className={mail.read === false ? "font-semibold" : "font-normal"}
      to={`${id}`}
      onClick={handleClick}
    >
      <li className="px-2 py-3 border-b flex justify-center items-center gap-3 hover:bg-blue-50">
        <div className="text-ellipsis">
          {mail.read === false && (
            <div className="inline-block mr-2 h-2.5 w-2.5 rounded-full bg-blue-700"></div>
          )}
          <span className="text-slate-500 text-sm">{label}</span>{" "}  
          <span>{label === "To:" ? mail.to : mail.from}</span>
        </div>
        <span className="text-ellipsis">
          {mail.subject}
        </span>
      </li>
    </Link>
  );
};

export default MailList;
