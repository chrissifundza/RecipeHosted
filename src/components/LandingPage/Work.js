import React from "react";
import PickMeals from "../../assets/landingPage/pick-meals-image.png";
import ChooseMeals from "../../assets/landingPage/choose-image.png";
import Save from "../../assets/landingPage/save.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Delicious Meals",
      text: "Learn to cook any meal, use the search option to type any ingredients you are having.",
    },
    {
      image: ChooseMeals,
      title: "Watch a Video",
      text: "You can watch a video of any recipe, learn how its done step by step guide.",
    },
    {
      image: Save,
      title: "Save Recipes in your profile",
      text: "To quickly revisit your favorite recipes, click the save button on the details page, and get them straight in your profile",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Follow the steps below to learn how to use cookITUP web app.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
