import React from "react";

export const Card = ({ user }) => {
  return (
    <div className="card Line">
      <img src={user.picture.large} alt={`Foto ${user.name.first}`} />
      <div>
        <strong>
          {user.name.last} {user.name.first}
        </strong>
        <div>
          Возраст: <strong>{user.dob.age} лет</strong>
        </div>
        <div>
          Пол: <strong>{user.gender === "male" ? "Мужской" : "Женский"}</strong>
        </div>
        <div>
          Адрес:{" "}
          <strong>
            {user.location.country}, {user.location.city}
          </strong>
        </div>
        <div>
          Дата регистрации:{" "}
          <strong>
            {new Date(user.registered.date).toLocaleString("ru", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </strong>
        </div>
      </div>
    </div>
  );
};
