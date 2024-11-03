import React, { useState } from "react";
import { createUser } from "../services/api";

interface UserFormProps {
  onUserCreated: () => void;
}

// Định nghĩa kiểu dữ liệu `User` để hàm createUser yêu cầu đúng kiểu dữ liệu
interface User {
  fullName: string;
  age: number; // Đảm bảo age có kiểu là number
  address: string;
}

const UserForm: React.FC<UserFormProps> = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "", // age bắt đầu dưới dạng string
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Chuyển đổi `age` thành kiểu number trước khi truyền vào
    const user: User = {
      fullName: formData.fullName,
      age: Number(formData.age), // Chuyển đổi từ string sang number
      address: formData.address,
    };

    try {
      await createUser(user); // Gọi API với đúng kiểu dữ liệu `User`
      setFormData({ fullName: "", age: "", address: "" }); // Reset form
      onUserCreated();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
              type="text"
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
              type="number"
              className="form-control"
              name="age"
              value={formData.age}
              onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
              type="text"
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
  );
};

export default UserForm;
