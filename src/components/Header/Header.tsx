import styles from "./header.module.css";

interface IHeader {
  title: string;
  subtitle: string;
  variant: "first";
}

function Header({ title, subtitle, variant }: IHeader) {
  return (
    <>
      <div className={styles[variant]}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
}

export default Header;