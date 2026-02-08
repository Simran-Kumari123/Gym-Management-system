import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP  BODY WORKOUT SESSION</h1>
        <p>
          Push your limits with our top-tier workout sessions designed to build strength, endurance, and confidence—all in one place.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Discover intensive bootcamps led by expert trainers—crafted to challenge your body, energize your routine, and deliver real results.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              This program focuses on building foundational power and endurance through structured, high-intensity workouts.
            </p>
          </div>
          <div>
            <h4>HIIT Burn Sessions</h4>
            <p>
              Maximize fat loss and boost stamina with high-impact intervals designed for fast, effective results.
            </p>
          </div>
          <div>
            <h4>Core & Flexibility Boost</h4>
            <p>
              Improve posture, mobility, and flexibility with sessions that engage your core and support long-term fitness.
            </p>
          </div>
          <div>
            <h4>Outdoor Bootcamp Challenge</h4>
            <p>
              Take your training outside with dynamic, team-based challenges that push your limits in a fun, energetic setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
