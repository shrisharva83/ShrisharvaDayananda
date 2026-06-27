export default function Footer() {
  return (
    <footer className="foot wrap">
      <div className="foot-row">
        <span className="foot-end">
          The End
          <span className="ta"></span>
        </span>
       <div className="foot-copy">
  © {new Date().getFullYear()} Shrisharva Dayananda
</div>
      </div>
    </footer>
  )
}
