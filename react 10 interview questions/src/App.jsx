import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

import DebouncedSearch from "./components/DebouncedSearch";
import InfiniteScroll from "./components/InfiniteScroll";
import LargeList from "./components/LargeList";
import Pagination from "./components/Pagination";
import ShoppingCart from "./components/ShoppingCart";
import TodoApp from "./components/TodoApp";
import ApiStates from "./examples/ApiStates";
import CancelRequest from "./examples/CancelRequest";
import PreventRerenders from "./examples/PreventRerenders";
import { lessons } from "./data/lessons";

const demos = {
  rerender: PreventRerenders,
  debounce: DebouncedSearch,
  api: ApiStates,
  cancel: CancelRequest,
  pagination: Pagination,
  infinite: InfiniteScroll,
  "large-list": LargeList,
  cart: ShoppingCart,
  todo: TodoApp,
};

function App() {
  const [activeLessonId, setActiveLessonId] = useState(lessons[0].id);
  const [activeTab, setActiveTab] = useState("learn");
  const [search, setSearch] = useState("");
  const [learnedLessons, setLearnedLessons] = useState([]);
  const searchInputRef = useRef(null);

  const activeLesson =
    lessons.find((lesson) => lesson.id === activeLessonId) ?? lessons[0];
  const currentIndex = lessons.findIndex(
    (lesson) => lesson.id === activeLesson.id,
  );
  const filteredLessons = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return lessons;

    return lessons.filter((lesson) =>
      `${lesson.title} ${lesson.question} ${lesson.level}`
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  const isLearned = learnedLessons.includes(activeLesson.id);
  const Demo = demos[activeLesson.demo];

  useEffect(() => {
    function focusSearch(event) {
      if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
      ) {
        return;
      }

      event.preventDefault();
      searchInputRef.current?.focus();
    }

    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  function openLesson(lessonId) {
    setActiveLessonId(lessonId);
    setActiveTab("learn");
  }

  function toggleLearned() {
    setLearnedLessons((current) =>
      isLearned
        ? current.filter((lessonId) => lessonId !== activeLesson.id)
        : [...current, activeLesson.id],
    );
  }

  function moveLesson(direction) {
    const nextIndex = Math.min(
      Math.max(currentIndex + direction, 0),
      lessons.length - 1,
    );
    openLesson(lessons[nextIndex].id);
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">R</span>
          <span>
            <strong>React Interview</strong>
            <small>LEARNING LAB</small>
          </span>
        </div>

        <div className="course-card">
          <div className="course-card-top">
            <span className="course-label">YOUR LEARNING PATH</span>
            <span className="course-level">BEGINNER</span>
          </div>
          <strong>React interview prep</strong>
          <p>Small lessons. Clear answers. Real practice.</p>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Course progress"
            aria-valuenow={learnedLessons.length}
            aria-valuemin={0}
            aria-valuemax={lessons.length}
          >
            <span
              style={{
                width: `${(learnedLessons.length / lessons.length) * 100}%`,
              }}
            />
          </div>
          <span className="progress-caption">
            {learnedLessons.length} of {lessons.length} lessons completed
          </span>
        </div>

        <nav className="lesson-navigation" aria-label="React lessons">
          <div className="nav-heading">THE 10 QUESTIONS</div>
          {filteredLessons.map((lesson) => (
            <button
              className={`lesson-link${activeLesson.id === lesson.id ? " active" : ""}`}
              key={lesson.id}
              onClick={() => openLesson(lesson.id)}
              aria-current={activeLesson.id === lesson.id ? "page" : undefined}
            >
              <span
                className={`lesson-number${learnedLessons.includes(lesson.id) ? " completed" : ""}`}
              >
                {learnedLessons.includes(lesson.id) ? "✓" : lesson.number}
              </span>
              <span className="lesson-link-text">{lesson.shortTitle}</span>
              <span className="lesson-duration">{lesson.time}</span>
            </button>
          ))}
          {filteredLessons.length === 0 && (
            <p className="empty-search">No lessons match that search.</p>
          )}
        </nav>

        <div className="sidebar-note">
          <span className="note-star">TIP</span>
          <p>Say the idea in your own words. That is how it sticks.</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            <span>LEARNING PATH</span>
            <span className="breadcrumb-divider">/</span>
            <strong>{activeLesson.shortTitle}</strong>
          </div>
          <label className="search-box">
            <span className="search-icon" aria-hidden="true" />
            <span className="visually-hidden">Search lessons</span>
            <input
              ref={searchInputRef}
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Find a question..."
            />
            <kbd>/</kbd>
          </label>
        </header>

        <div className="page-wrap">
          <section className="welcome-banner">
            <div className="welcome-copy">
              <span className="eyebrow">YOUR REACT INTERVIEW PLAYBOOK</span>
              <h1>Understand it. Remember it. Explain it.</h1>
              <p>
                Ten real React questions, explained in simple English and
                backed by code you can try.
              </p>
            </div>
            <div className="banner-art" aria-hidden="true">
              <span className="art-ring art-ring-one" />
              <span className="art-ring art-ring-two" />
              <span className="art-dot" />
              <span className="art-label">REACT</span>
            </div>
          </section>

          <div className="quick-facts" aria-label="Course details">
            <div className="fact-card">
              <span className="fact-number">10</span>
              <span>
                <strong>Core questions</strong>
                <small>The topics from your interview prep</small>
              </span>
            </div>
            <div className="fact-card">
              <span className="fact-symbol">01</span>
              <span>
                <strong>One idea at a time</strong>
                <small>Plain-English explanations, not jargon</small>
              </span>
            </div>
            <div className="fact-card">
              <span className="fact-symbol">GO</span>
              <span>
                <strong>Practice as you learn</strong>
                <small>Interactive demos and answers to rehearse</small>
              </span>
            </div>
          </div>

          <article className="lesson-card">
            <div className="lesson-heading">
              <div>
                <div className="lesson-meta">
                  <span className="question-tag">QUESTION {activeLesson.number}</span>
                  <span>{activeLesson.level}</span>
                  <span className="meta-dot" />
                  <span>{activeLesson.time} read</span>
                </div>
                <h2>{activeLesson.title}</h2>
                <p className="question-prompt">{activeLesson.question}</p>
              </div>
              <button
                className={`complete-button${isLearned ? " is-complete" : ""}`}
                onClick={toggleLearned}
                aria-pressed={isLearned}
              >
                <span aria-hidden="true">{isLearned ? "✓" : "+"}</span>
                {isLearned ? "Learned" : "Mark as learned"}
              </button>
            </div>

            <div className="lesson-tabs" role="tablist" aria-label="Lesson sections">
              <button
                id="tab-learn"
                role="tab"
                aria-selected={activeTab === "learn"}
                aria-controls="lesson-panel"
                className={activeTab === "learn" ? "selected" : ""}
                onClick={() => setActiveTab("learn")}
              >
                <span>01</span> Understand
              </button>
              <button
                id="tab-practice"
                role="tab"
                aria-selected={activeTab === "practice"}
                aria-controls="lesson-panel"
                className={activeTab === "practice" ? "selected" : ""}
                onClick={() => setActiveTab("practice")}
              >
                <span>02</span> Try it
              </button>
              <button
                id="tab-interview"
                role="tab"
                aria-selected={activeTab === "interview"}
                aria-controls="lesson-panel"
                className={activeTab === "interview" ? "selected" : ""}
                onClick={() => setActiveTab("interview")}
              >
                <span>03</span> Interview answer
              </button>
            </div>

            <div
              className="lesson-panel"
              id="lesson-panel"
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
            >
              {activeTab === "learn" && (
                <div className="learn-content">
                  <div className="concept-column">
                    <section className="concept-section">
                      <span className="section-kicker">THE SIMPLE IDEA</span>
                      <p className="explanation-copy">
                        {activeLesson.explanation}
                      </p>
                    </section>

                    <section className="analogy-card">
                      <span className="analogy-icon" aria-hidden="true">
                        AHA
                      </span>
                      <div>
                        <span className="section-kicker">PICTURE IT</span>
                        <p>{activeLesson.analogy}</p>
                      </div>
                    </section>

                    <section className="steps-section">
                      <span className="section-kicker">HOW IT WORKS</span>
                      <ol className="step-list">
                        {activeLesson.steps.map((step, index) => (
                          <li key={step}>
                            <span className="step-number">{index + 1}</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </section>
                  </div>

                  <div className="code-column">
                    <div className="code-card">
                      <div className="code-card-header">
                        <span className="code-dots" aria-hidden="true">
                          <i />
                          <i />
                          <i />
                        </span>
                        <span>THE PATTERN</span>
                        <span className="code-language">JSX</span>
                      </div>
                      <pre>
                        <code>{activeLesson.code}</code>
                      </pre>
                    </div>

                    <div className="memory-card">
                      <span className="section-kicker">MAKE IT STICK</span>
                      <p>{activeLesson.memory}</p>
                    </div>

                    <div className="mistake-card">
                      <span className="section-kicker">WATCH OUT</span>
                      <p>{activeLesson.mistake}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "practice" && (
                <div className="practice-content">
                  <div className="practice-intro">
                    <div>
                      <span className="section-kicker">LEARN BY DOING</span>
                      <h3>Try the idea yourself</h3>
                    </div>
                    <span className="live-badge">
                      <span /> LIVE DEMO
                    </span>
                  </div>
                  <div className="demo-stage">
                    <Demo />
                  </div>
                  <p className="practice-hint">
                    Change something, watch what happens, and explain why in
                    your own words.
                  </p>
                </div>
              )}

              {activeTab === "interview" && (
                <div className="interview-content">
                  <div className="interview-intro">
                    <span className="section-kicker">YOUR 30-SECOND ANSWER</span>
                    <h3>Say it simply and confidently.</h3>
                    <p>
                      Learn the idea first. Then use this as a guide, not a
                      script to memorize word for word.
                    </p>
                  </div>
                  <blockquote className="answer-card">
                    <span className="quote-mark" aria-hidden="true">
                      "
                    </span>
                    <p>{activeLesson.interview}</p>
                  </blockquote>
                  <div className="follow-up-card">
                    <span className="follow-up-label">IF THEY ASK MORE</span>
                    <p>{activeLesson.followUp}</p>
                  </div>
                  <div className="answer-tip">
                    <strong>Practice tip</strong>
                    <span>
                      Close this panel and explain the answer out loud without
                      looking.
                    </span>
                  </div>
                </div>
              )}
            </div>

            <footer className="lesson-footer">
              <button
                className="lesson-step-button previous-button"
                onClick={() => moveLesson(-1)}
                disabled={currentIndex === 0}
              >
                <span aria-hidden="true">&larr;</span>
                <span>
                  <small>PREVIOUS</small>
                  {currentIndex === 0
                    ? "First lesson"
                    : lessons[currentIndex - 1].shortTitle}
                </span>
              </button>
              <span className="lesson-count">
                {currentIndex + 1} <span>/</span> {lessons.length}
              </span>
              <button
                className="lesson-step-button next-button"
                onClick={() => moveLesson(1)}
                disabled={currentIndex === lessons.length - 1}
              >
                <span>
                  <small>NEXT UP</small>
                  {currentIndex === lessons.length - 1
                    ? "Course complete"
                    : lessons[currentIndex + 1].shortTitle}
                </span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </footer>
          </article>

          <p className="page-footer">
            Built for beginners. Useful for your next React interview.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
