import { useEffect, useState } from "react";
import "./styles.css";

export default function Avatar() {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  return (
    <div className="Avatar">
      <input type="file" onChange={handleAvatar} />
      {avatar && <img src={avatar.preview} width="80%" alt="" />}
    </div>
  );
}