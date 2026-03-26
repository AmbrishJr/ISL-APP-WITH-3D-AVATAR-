import React from "react";
import { Link } from "react-router-dom";
import imgConvert from "../../Assets/convert.png";
import imgLearnSign from "../../Assets/learn-sign.jpg";
import imgVideos from "../../Assets/videos.png";

function Services() {
  return (
    <section id="services">
      <div className="section">
        <div className="container-narrow">
          <div className="text-center">
            <h2 className="section-title">Services</h2>
            <p className="section-lead">
              Pick a workflow and start instantly — built to stay clean, focused, and easy to use.
            </p>
          </div>

          <div className="grid-3">
            <article className="surface-card service-card">
              <img className="service-img" src={imgConvert} alt="Convert speech or text to ISL" loading="lazy" />
              <div className="service-body">
                <h3 className="service-title">Convert</h3>
                <p className="service-desc">
                  Speak or type a phrase and watch the avatar translate it into ISL.
                </p>
                <div className="service-meta">Try a phrase in 10 seconds</div>
              </div>
              <div className="service-footer">
                <Link to="/sign-kit/convert" className="btn btn-brand btn-cta pressable">
                  Start Converting
                </Link>
              </div>
            </article>

            <article className="surface-card service-card">
              <img className="service-img" src={imgLearnSign} alt="Learn and practice ISL signs" loading="lazy" />
              <div className="service-body">
                <h3 className="service-title">Learn Signs</h3>
                <p className="service-desc">
                  Practice alphabets and common words with quick replay and speed controls.
                </p>
                <div className="service-meta">Practice A–Z and key words</div>
              </div>
              <div className="service-footer">
                <Link to="/sign-kit/learn-sign" className="btn btn-surface btn-cta pressable">
                  Start Learning
                </Link>
              </div>
            </article>

            <article className="surface-card service-card">
              <img className="service-img" src={imgVideos} alt="Create and browse ISL videos" loading="lazy" />
              <div className="service-body">
                <h3 className="service-title">Videos</h3>
                <p className="service-desc">
                  Create ISL videos from text, speech, or files — then share them using a video ID.
                </p>
                <div className="service-meta">Create and share in minutes</div>
              </div>
              <div className="service-footer">
                <Link to="/sign-kit/all-videos" className="btn btn-surface btn-cta pressable">
                  Explore Videos
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
