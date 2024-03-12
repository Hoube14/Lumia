const Contact = () => {
  return (
    <div className="contact">
      <label htmlFor="">Email</label>
      <input type="text" placeholder="Email" />
      <label htmlFor="">Ditt Meddelande</label>
      <input type="text" placeholder="Skriv ditt meddelande här" />
      <button>Skicka ditt meddelande</button>
    </div>
  );
};

export default Contact;
