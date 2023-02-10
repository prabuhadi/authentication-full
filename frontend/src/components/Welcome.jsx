import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="p-3">
      <h1 className="title">User Profile</h1>
      <h2 className="subtitle mt-3">
        Welcome Back <strong>{user && user.name}</strong>! Have a nice day ...
      </h2>
      <p className="p-4 mr-6 is-family-secondary has-text-justified">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti
        doloribus magni ut ab voluptates, ducimus, error quidem autem, eveniet
        quod voluptate magnam aliquid amet perspiciatis illo mollitia! Fugiat
        veniam vitae aut dignissimos perferendis? Omnis earum ex animi corrupti.
        Vero atque non ratione odio iste. Velit quibusdam modi at ullam iste
        mollitia dolorem adipisci voluptates debitis voluptas eaque corrupti
        distinctio blanditiis ratione ducimus culpa, eum aut voluptatem
        necessitatibus? Vero eius fuga quia provident magnam officiis nisi saepe
        ipsa animi, esse quae quibusdam id fugiat aspernatur cum deserunt
        laudantium tempora. Provident totam deserunt dolor saepe quis itaque
        praesentium ipsum. Obcaecati, aliquam.
      </p>
    </div>
  );
};

export default Welcome;
