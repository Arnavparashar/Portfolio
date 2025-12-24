import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow pt-24 pb-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-semibold tracking-tight">
              Contact
            </h1>
            <p className="text-muted mt-3 max-w-xl">
              Get in touch for collaborations, consulting, or analytics-focused
              project discussions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* LEFT — Contact Info */}
            <div className="section-card">
              <h3 className="text-lg font-semibold">
                Reach out
              </h3>

              <p className="text-muted mt-2">
                Prefer email? I typically respond within a few business days.
              </p>

              <div className="mt-6">
                <div className="text-sm text-muted">
                  Email
                </div>
                <a
                  href="mailto:arnav.parashar2000@gmail.com"
                  className="block mt-1 font-medium text-white hover:underline"
                >
                  arnav.parashar2000@gmail.com
                </a>
              </div>

              <div className="mt-4 text-sm text-muted">
                Also available on{" "}
                <a
                  href="https://www.linkedin.com/in/arnav-parashar-920212240/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-8">
                <h4 className="font-medium">
                  Availability
                </h4>
                <p className="text-muted mt-2">
                  Open to short-term consulting, collaborations, and full-time
                  roles related to forecasting, machine learning, and analytics.
                </p>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="section-card">
              <h3 className="text-lg font-semibold">
                Send a message
              </h3>

              <p className="text-muted mt-2">
                Share a brief overview of your project or inquiry.
              </p>

              <form
                onSubmit={submit}
                className="mt-6 grid gap-4"
                aria-live="polite"
              >
                <div>
                  <label className="text-sm text-muted">
                    Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="
                      mt-1
                      w-full
                      p-3
                      rounded-lg
                      bg-[#050f1f]
                      border
                      border-white/10
                      focus:outline-none
                      focus:border-white/30
                    "
                  />
                </div>

                <div>
                  <label className="text-sm text-muted">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@company.com"
                    className="
                      mt-1
                      w-full
                      p-3
                      rounded-lg
                      bg-[#050f1f]
                      border
                      border-white/10
                      focus:outline-none
                      focus:border-white/30
                    "
                  />
                </div>

                <div>
                  <label className="text-sm text-muted">
                    Message
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Describe your project or inquiry"
                    className="
                      mt-1
                      w-full
                      p-3
                      rounded-lg
                      bg-[#050f1f]
                      border
                      border-white/10
                      h-36
                      resize-none
                      focus:outline-none
                      focus:border-white/30
                    "
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-muted">
                    You’ll receive a reply to the email provided.
                  </span>

                  <button type="submit" className="btn-primary">
                    Send
                  </button>
                </div>

                <div className="pt-2">
                  {status === "sending" && (
                    <div className="text-muted">Sending…</div>
                  )}
                  {status === "sent" && (
                    <div className="text-white">
                      Message sent — thanks for reaching out.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="text-red-400">
                      Something went wrong. Please try again or email directly.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
