import Image from "next/image";

const items = [
  {
    logo: "/nabl.png",
    alt: "NABL — National Accreditation Board for Testing and Calibration Laboratories",
    className: "cred-logo cred-logo--nabl",
    title: "NABL Accredited – 17025",
    text: "ITC India is accredited by NABL as per ISO 17025 in the field of Photometry, Electrical Safety Testing for Household Equipment, Electro-Medical Equipment, Laboratory Equipment & Luminaires.",
  },
  {
    logo: "/eurocert.png",
    alt: "Eurocert Notified Body 1128",
    className: "cred-logo cred-logo--euro",
    title: "Eurocert Notified Body 1128",
    text: "Eurocert is a Notified Body No. 1128 in Lifts, Machinery & Pressure Equipment Directive. They rely on our reports and find our services professional and reliable.",
  },
  {
    logo: "/dedal.png",
    alt: "Dedal Attestation & Certification — Notified Body 1922",
    className: "cred-logo",
    title: "Dedal – Notified Body 1922",
    text: "Dedal is a Notified Body with a focus on Construction Product Directive. They find ITC India staff competent and professional and accept reports issued by us.",
  },
];

export default function Credentials() {
  return (
    <section className="credentials" id="credentials" aria-labelledby="credentials-title">
      <Image
        src="/credentials-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="credentials-bg"
        priority={false}
      />
      <div className="credentials-veil" aria-hidden="true" />
      <div className="credentials-inner">
        <header className="credentials-head">
          <p className="credentials-eyebrow">
            <span>Accreditations &amp; Partners</span>
          </p>
          <h2 id="credentials-title" className="credentials-title">
            Our Credentials
          </h2>
        </header>

        <div className="credentials-grid">
          {items.map((item) => (
            <article className="cred-item" key={item.title}>
              <div className={item.className}>
                <Image src={item.logo} alt={item.alt} width={140} height={140} />
              </div>
              <div className="cred-copy">
                <h3 className="cred-name">{item.title}</h3>
                <p className="cred-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
