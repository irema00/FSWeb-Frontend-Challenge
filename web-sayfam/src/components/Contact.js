import { useData } from "../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { postData } = useData();
  const { contact } = postData;
  return (
        <h3 className="text-[48px] font-bold">{contact.title}</h3>
        <p className="pt-10 text-xl underline">{contact.email}</p>
      </div>
    </div>
  );
};

export default Contact;
