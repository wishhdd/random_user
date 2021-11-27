import React from "react";

export const Card = ({ user }) => {
  return (
    <div>
      <div>
        <img src={user.picture.large} alt={`Foto ${user.name.first}`} />

        <div>
          <strong>
            {user.name.last} {user.name.first}
          </strong>
          <ul>
            <li>
              Возраст: <strong>{user.dob.age} лет</strong>
            </li>
            <li>
              Пол: <strong>{user.gender === "male" ? "Мужской" : "Женский"}</strong>
            </li>
            <li>
              Адрес:{" "}
              <strong>
                {user.location.country}, {user.location.city}
              </strong>
            </li>
            <li>
              Дата регистрации:{" "}
              <strong>
                {new Date(user.registered.date).toLocaleString("ru", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
