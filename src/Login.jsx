// src/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { unlockNotificationAudio } from "./utils/notificationSound";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    // الإبقاء على آلية الدخول الموجودة في المشروع
    if (username === "K" && password === "01055655443") {
      try {
        unlockNotificationAudio();
        sessionStorage.setItem("audioUnlocked", "1");

        // هذا التوكن تجريبي وليس وسيلة مصادقة آمنة
        localStorage.setItem(
          "token",
          Math.random().toString(36).slice(2)
        );

        navigate("/");
      } catch {
        setErrorMsg("حدث خطأ أثناء تسجيل الدخول.");
        setLoading(false);
      }
    } else {
      setErrorMsg("بيانات الدخول غير صحيحة.");
      setLoading(false);
    }
  };

  return (
    <div className="mafia-page" dir="rtl">
      <style>{`
        .mafia-page {
          --red: #f02b43;
          --red-dark: #8f1025;
          --black: #08090c;
          --panel: #101115;
          --silver: #e6e6e9;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
          overflow: hidden;
          position: relative;
          isolation: isolate;
          background: #08090c;
          color: var(--silver);
          font-family: "Segoe UI", Tahoma, sans-serif;
        }

        .mafia-page *,
        .mafia-page *::before,
        .mafia-page *::after {
          box-sizing: border-box;
        }

        .mafia-grid {
          position: absolute;
          inset: 0;
          z-index: -2;
          opacity: .15;
          background-image:
            linear-gradient(#ffffff0c 1px, transparent 1px),
            linear-gradient(90deg, #ffffff0c 1px, transparent 1px);
          background-size: 45px 45px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }

        .mafia-glow {
          position: absolute;
          z-index: -1;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: #b20e2926;
          filter: blur(100px);
          pointer-events: none;
        }

        .mafia-glow.one {
          top: -220px;
          right: -100px;
        }

        .mafia-glow.two {
          bottom: -240px;
          left: -100px;
          background: #7c101c20;
        }

        .mafia-layout {
          width: 100%;
          max-width: 1050px;
          min-height: 620px;
          display: grid;
          grid-template-columns: 1fr 430px;
          border: 1px solid #ffffff17;
          border-radius: 7px;
          overflow: hidden;
          background: #0b0c10;
          box-shadow:
            0 35px 100px #000a,
            0 0 70px #e11d4810;
          animation: mafia-enter .7s ease both;
        }

        .mafia-showcase {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 45px;
          overflow: hidden;
          background:
            linear-gradient(135deg, #151519, #0b0b0e 65%, #17090d);
          border-left: 1px solid #ffffff12;
        }

        .mafia-showcase::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          left: -160px;
          top: 80px;
          border: 1px solid #f02b431e;
          transform: rotate(45deg);
          box-shadow:
            0 0 0 35px #f02b4305,
            0 0 0 75px #f02b4304;
          pointer-events: none;
        }

        .mafia-showcase::after {
          content: "";
          position: absolute;
          top: 0;
          left: 45px;
          width: 2px;
          height: 125px;
          background: linear-gradient(transparent, var(--red), transparent);
          box-shadow: 0 0 20px #f02b4370;
        }

        .mafia-brand {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .mafia-mark {
          width: 51px;
          height: 51px;
          display: grid;
          place-items: center;
          background: var(--red);
          color: white;
          font-size: 25px;
          font-weight: 950;
          font-style: italic;
          transform: skew(-5deg);
          box-shadow: 0 0 35px #f02b4333;
        }

        .mafia-brand-name {
          font-size: 24px;
          font-weight: 950;
          letter-spacing: 3px;
          color: #fff;
        }

        .mafia-brand-name span {
          color: var(--red);
        }

        .mafia-brand-caption {
          display: block;
          margin-top: 4px;
          color: #71717a;
          font-size: 9px;
          letter-spacing: 3px;
        }

        .mafia-hero {
          position: relative;
          z-index: 1;
          padding: 50px 0;
        }

        .mafia-edition {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #a1a1aa;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 24px;
        }

        .mafia-edition::before {
          content: "";
          display: block;
          width: 27px;
          height: 2px;
          background: var(--red);
          box-shadow: 0 0 12px #f02b4380;
        }

        .mafia-hero h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(42px, 5vw, 70px);
          line-height: 1.12;
          letter-spacing: -2px;
          font-weight: 950;
        }

        .mafia-hero h2 span {
          display: block;
          color: var(--red);
          text-shadow: 0 0 35px #f02b4325;
        }

        .mafia-hero p {
          max-width: 370px;
          margin: 25px 0 0;
          color: #888891;
          font-size: 13px;
          line-height: 2.1;
        }

        .mafia-stats {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 30px;
          padding-top: 25px;
          border-top: 1px solid #ffffff12;
        }

        .mafia-stat strong {
          display: block;
          color: #f4f4f5;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .mafia-stat span {
          display: block;
          margin-top: 6px;
          color: #62626b;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .mafia-form-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 44px 35px;
          background:
            radial-gradient(ellipse at top right, #25101560, transparent 55%),
            #0d0e12;
        }

        .mafia-form-head {
          margin-bottom: 35px;
        }

        .mafia-form-label {
          color: var(--red);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        .mafia-form-head h1 {
          margin: 0 0 12px;
          font-size: 32px;
          color: white;
          font-weight: 900;
          letter-spacing: -.8px;
        }

        .mafia-form-head p {
          margin: 0;
          color: #777780;
          font-size: 12px;
          line-height: 1.9;
        }

        .mafia-error {
          margin-bottom: 20px;
          padding: 13px;
          border-right: 3px solid var(--red);
          background: #f02b4310;
          color: #ff9aa7;
          font-size: 12px;
          line-height: 1.8;
        }

        .mafia-field {
          margin-bottom: 23px;
        }

        .mafia-field label {
          display: block;
          margin-bottom: 10px;
          color: #c9c9ce;
          font-size: 12px;
          font-weight: 700;
        }

        .mafia-input-wrap {
          position: relative;
        }

        .mafia-input {
          width: 100%;
          height: 55px;
          padding: 0 16px 0 58px;
          border: 1px solid #292a30;
          border-radius: 3px;
          outline: none;
          background: #111216;
          color: white;
          font-family: inherit;
          font-size: 13px;
          transition: border-color .2s, background .2s, box-shadow .2s;
        }

        .mafia-input::placeholder {
          color: #5e5e68;
        }

        .mafia-input:focus {
          border-color: #f02b4380;
          background: #151217;
          box-shadow: 0 0 0 3px #f02b4310;
        }

        .mafia-input-icon {
          position: absolute;
          left: 17px;
          top: 50%;
          transform: translateY(-50%);
          color: #666670;
          display: flex;
          pointer-events: none;
        }

        .mafia-eye {
          position: absolute;
          left: 43px;
          top: 50%;
          transform: translateY(-50%);
          padding: 5px;
          border: 0;
          background: transparent;
          color: var(--red);
          font-size: 9px;
          font-weight: 900;
          cursor: pointer;
        }

        .mafia-password {
          padding-left: 88px;
        }

        .mafia-submit {
          width: 100%;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          border: 0;
          border-radius: 3px;
          background: var(--red);
          color: white;
          font-family: inherit;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 1px;
          cursor: pointer;
          box-shadow: 0 8px 30px #f02b4318;
          transition: background .2s, transform .2s, box-shadow .2s;
        }

        .mafia-submit:hover:not(:disabled) {
          background: #ff304c;
          transform: translateY(-2px);
          box-shadow: 0 12px 35px #f02b4338;
        }

        .mafia-submit:disabled {
          opacity: .65;
          cursor: wait;
        }

        .mafia-submit-arrow {
          font-size: 20px;
          line-height: 1;
        }

        .mafia-security {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 22px;
          color: #686873;
          font-size: 10px;
        }

        .mafia-security-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d92d49;
          box-shadow: 0 0 10px #d92d4960;
        }

        .mafia-footer {
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid #ffffff10;
          color: #55555f;
          font-size: 9px;
          line-height: 2;
          text-align: center;
          letter-spacing: .5px;
        }

        @keyframes mafia-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 850px) {
          .mafia-page {
            padding: 16px;
          }

          .mafia-layout {
            max-width: 480px;
            grid-template-columns: 1fr;
          }

          .mafia-showcase {
            min-height: 280px;
            padding: 27px;
          }

          .mafia-hero {
            padding: 35px 0;
          }

          .mafia-hero h2 {
            font-size: 43px;
          }

          .mafia-hero p {
            margin-top: 15px;
          }

          .mafia-form-panel {
            padding: 32px 27px;
          }
        }

        @media (max-width: 420px) {
          .mafia-page {
            padding: 9px;
          }

          .mafia-showcase {
            min-height: 250px;
            padding: 22px;
          }

          .mafia-hero h2 {
            font-size: 36px;
          }

          .mafia-form-panel {
            padding: 28px 20px;
          }

          .mafia-form-head h1 {
            font-size: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mafia-layout {
            animation: none;
          }

          .mafia-input,
          .mafia-submit {
            transition: none;
          }
        }
      `}</style>

      <div className="mafia-grid" aria-hidden="true" />
      <div className="mafia-glow one" aria-hidden="true" />
      <div className="mafia-glow two" aria-hidden="true" />

      <main className="mafia-layout">
        <section className="mafia-showcase">
          <header className="mafia-brand">
            <div className="mafia-mark">B</div>
            <div>
              <div className="mafia-brand-name">
                B<span>CARE</span>
              </div>
              <span className="mafia-brand-caption">
                PREMIUM MANAGEMENT
              </span>
            </div>
          </header>

          <div className="mafia-hero">
            <div className="mafia-edition">
              PRIVATE ACCESS / 001
            </div>

            <h2>
              OWN YOUR
              <span>EMPIRE.</span>
            </h2>

            <p>
              مساحة إدارية مصممة للقوة والدقة.
              كل التفاصيل في مكان واحد، بتجربة
              مختلفة عن أي لوحة تحكم تقليدية.
            </p>
          </div>

          <div className="mafia-stats">
            <div className="mafia-stat">
              <strong>B CARE</strong>
              <span>CONTROL CENTER</span>
            </div>
            <div className="mafia-stat">
              <strong>PRIVATE</strong>
              <span>AUTHORIZED ACCESS</span>
            </div>
          </div>
        </section>

        <section className="mafia-form-panel">
          <header className="mafia-form-head">
            <div className="mafia-form-label">
              THE INNER CIRCLE
            </div>

            <h1>الدخول للنظام</h1>

            <p>
              أدخل بيانات حسابك للوصول إلى لوحة الإدارة.
              <br />
              تأكد من صحة بيانات تسجيل الدخول.
            </p>
          </header>

          <form onSubmit={handleSubmit}>
            {errorMsg && (
              <div className="mafia-error" role="alert">
                {errorMsg}
              </div>
            )}

            <div className="mafia-field">
              <label htmlFor="mafia-username">
                اسم المستخدم / USERNAME
              </label>

              <div className="mafia-input-wrap">
                <input
                  id="mafia-username"
                  className="mafia-input"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="أدخل اسم المستخدم"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <span className="mafia-input-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="mafia-field">
              <label htmlFor="mafia-password">
                كلمة المرور / PASSWORD
              </label>

              <div className="mafia-input-wrap">
                <input
                  id="mafia-password"
                  className="mafia-input mafia-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="أدخل كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <span className="mafia-input-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 1 1 8 0v3" />
                  </svg>
                </span>

                <button
                  type="button"
                  className="mafia-eye"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mafia-submit"
              disabled={loading}
            >
              <span>
                {loading ? "جارٍ التحقق..." : "دخول إلى النظام"}
              </span>
              {!loading && (
                <span className="mafia-submit-arrow">←</span>
              )}
            </button>

            <div className="mafia-security">
              <span className="mafia-security-dot" />
              <span>بوابة الدخول للمستخدمين المصرح لهم</span>
            </div>
          </form>

          <footer className="mafia-footer">
            B CARE MANAGEMENT
            <br />
            ALL RIGHTS RESERVED © {new Date().getFullYear()}
          </footer>
        </section>
      </main>
    </div>
  );
}
