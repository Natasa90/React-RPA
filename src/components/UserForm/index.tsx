import { useState, useEffect } from "react";
import { CustomInput } from "../CustomInput";
import { isValidHttpUrl } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { fetchTown } from "../../helpers";

export const UserForm = () => {
  const initialPayload = {
    firstName: "",
    lastName: "",
    link: "",
    town: "",
  };
  const [payload, setPayload] = useState(initialPayload);
  const [error, setError] = useState<string>("");
  const [temperature, setTemperature] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getTemperature = async () => {
      if (payload.town.toLowerCase()) {
        try {
          const temp = await fetchTown(payload.town);
          setTemperature(temp.current.temp_c);
        } catch (err) {
          setTemperature(null);
        }
      }
    };

    getTemperature();
  }, [payload.town]);

  const resetForm = () => {
    setPayload(initialPayload);
    setError("");
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !payload.firstName ||
      !payload.lastName ||
      !payload.link ||
      !payload.town
    ) {
      setError("Please fill all the fields before submitting.");
      return;
    }
    if (!isValidHttpUrl(payload.link)) {
      setError("Invalid URL. Please add a valid URL.");
      return;
    }
    navigate("/userProfile", { state: { userData: payload, temperature } });
    resetForm();
  };

  console.log(temperature);

  return (
    <div className="form_box">
      <h2>User's Form</h2>
      <form onSubmit={submitForm}>
        <CustomInput
          className="userForm_input"
          name="firstName"
          placeholder="First Name"
          value={payload.firstName}
          handleChange={(e) =>
            setPayload((prevState: any) => ({
              ...prevState,
              firstName: e.target.value,
            }))
          }
        />
        <CustomInput
          className="userForm_input"
          name="lastName"
          placeholder="Last Name"
          value={payload.lastName}
          handleChange={(e) =>
            setPayload((prevState: any) => ({
              ...prevState,
              lastName: e.target.value,
            }))
          }
        />
        <CustomInput
          type="url"
          className="userForm_input"
          name="link"
          placeholder="Add a link..."
          value={payload.link}
          handleChange={(e) =>
            setPayload((prevState: any) => ({
              ...prevState,
              link: e.target.value,
            }))
          }
        />
        <CustomInput
          className="userForm_input"
          name="town"
          placeholder="Add your town.. "
          value={payload.town}
          handleChange={(e) =>
            setPayload((prevState: any) => ({
              ...prevState,
              town: e.target.value,
            }))
          }
        />
        <button className="submit_button" type="submit">
          Submit
        </button>
      </form>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
