import React from "react";

export default function App() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      background: "#0B1D3A",
      color: "white",
      minHeight: "100vh",
      margin: 0,
      padding: 0
    }}>
      
      {/* HERO SECTION */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: "56px",
          fontWeight: "900",
          marginBottom: "20px",
          lineHeight: "1.1"
        }}>
          Build Your Brand.<br />
          Launch Your Idea.<br />
          Automate Your Business.
        </h1>

        <p style={{
          fontSize: "22px",
          maxWidth: "800px",
          margin: "0 auto 40px auto",
          lineHeight: "1.6",
          opacity: 0.9
        }}>
          Victory Hour Multimedia creates websites, apps, ads, books,
          GPT tools, and AI-powered systems for entrepreneurs and businesses
          ready to move.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          <button style={{
            background: "#C9A84C",
            color: "#0B1D3A",
            border: "none",
            padding: "18px 36px",
            borderRadius: "999px",
            fontWeight: "700",
            fontSize: "18px",
            cursor: "pointer"
          }}>
            Start a Project
          </button>

          <button style={{
            background: "transparent",
            color: "white",
            border: "2px solid white",
            padding: "18px 36px",
            borderRadius: "999px",
            fontWeight: "700",
            fontSize: "18px",
            cursor: "pointer"
          }}>
            View Our Work
          </button>
        </div>

        <p style={{
          marginTop: "30px",
          fontSize: "14px",
          opacity: 0.7
        }}>
          10% of profits support the fight against hunger.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{
        background: "#F7F1E3",
        color: "#0B1D3A",
        padding: "80px 20px"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "42px",
            fontWeight: "900",
            marginBottom: "20px"
          }}>
            Our Services
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px"
          }}>
            {[
              "Websites & Landing Pages",
              "Custom GPTs & AI Tools",
              "Business Automation",
              "Cinematic Ads & Content",
              "Books, Courses & Digital Products",
              "Apps & SaaS MVPs"
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "30px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
                }}
              >
                <h3 style={{
                  fontSize: "24px",
                  fontWeight: "800",
                  marginBottom: "15px"
                }}>
                  {service}
                </h3>

                <p style={{
                  lineHeight: "1.7",
                  color: "#444"
                }}>
                  Professional solutions designed for speed,
                  conversion, and real-world business growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section style={{
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h2 style={{
          fontSize: "42px",
          fontWeight: "900",
          marginBottom: "40px",
          textAlign: "center"
        }}>
          Featured Projects
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px"
        }}>
          {[
            "Pocket Lawyer GPT™",
            "VictoryReception AI™",
            "Career Application Assistant",
            "Cinema Ads AI"
          ].map((project, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <h3 style={{
                fontSize: "26px",
                fontWeight: "800",
                marginBottom: "15px"
              }}>
                {project}
              </h3>

              <p style={{
                lineHeight: "1.7",
                opacity: 0.85
              }}>
                Built to solve real business problems and create
                scalable digital revenue streams.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{
        background: "#F7F1E3",
        color: "#0B1D3A",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "42px",
            fontWeight: "900",
            marginBottom: "20px"
          }}>
            Your idea deserves more than a conversation.
          </h2>

          <p style={{
            fontSize: "20px",
            marginBottom: "40px",
            lineHeight: "1.7"
          }}>
            Let’s turn it into a real business asset.
          </p>

          <button style={{
            background: "#0B1D3A",
            color: "white",
            border: "none",
            padding: "18px 40px",
            borderRadius: "999px",
            fontWeight: "700",
            fontSize: "18px",
            cursor: "pointer"
          }}>
            Start Your Project
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "30px 20px",
        textAlign: "center",
        fontSize: "14px",
        opacity: 0.7
      }}>
        © 2026 Victory Hour Multimedia Inc. — All Rights Reserved
      </footer>

    </main>
  );
}