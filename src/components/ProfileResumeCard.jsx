import React from "react";
import "../styles/ProductCard.css"; // 👈 Import CSS file

const Resume = () => {
  const person = {
    id: 1,
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwYHBQj/xABAEAABAwMABgYHBgMJAQAAAAABAAIDBAURBhIhMUFhIlFxgaHRBxMUQlKRsRUjMnKTwURiYyRTVIKSorLC8Bb/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QAMBEAAgEDAwIDBwQDAQAAAAAAAAECAwQREiExFFEFIkETMmFxobHRgZHh8CMzQiT/2gAMAwEAAhEDEQA/AO4oAgCAIAgCAZQHnXa80NqjzVzhryMtjbtc7sCgrXNKivO/yS06M6nuo1Wq02q5nFtsogBwMmXu+Q81yqni03/riXYWEV77Ihvuk7yXCXUHUImY8Qq/XXb9foiXpqHYqzSXSKmOZw2ZvEOhH/XCzHxK5jzv+n4DtKEuNj1rbpvTykR3CB1O7i9vSaO3iPFXqPilOW1RY+xWqWMlvB5Nqp54qiFssErJI3DLXtOQV04yjJZi8opOLTwzKtjAQBAEAQBAEAQBAEAQBAUJwgNa0q0kFsHstHh9a8beIjB4nn1Bc69vVR8kPe+xbtrb2nmlwarS2uSpeaq5SPfI/aQ47T2n9lxVCU3rqM6WpRWInptDImhsMbWtG7AwpNlwjTf1LXOfy+S1bkZwjE6R43gFaOTNkkR54YKnZIwB547j81o9LNt0YaKtrtHqj1kDjLTuPSjJ6LvI81NQuKltLMd12I6lGFZYfJ0a13GC5UbKmmdljthB3tPEFeko1o1oKceDj1KcqctMiYpTQIAgCAIAgCAIAgCAIDzr9cmWq2S1TsF46MbT7zzuCr3NdUabn/cktGm6k1FGg2mnfPK+41ZL3vcXNLuJ4lecgnNupI68sRWmJ6u1544UvvGnBlbEpFA1yHRLDiFIiyxqGUSRMhysUEkSRZbG4SAxTYIPXxWISztIzJeqLtHa99ivAjkcTSzkNdncOp3dxVyxruhVSfDILmkqtPK5R0ppyvSnGKoAgCAIAgCAIAgCAodyA0TT2ofUXGjtzT0WtD3fmcSB4A/NcLxao3ONNHTsY4i5loAjYyNn4QMY5Kq9tkT/ABJMIypYI0kyZGwFWIxImykrAFiURFkGZqrTRNEgzBVpk0SE7Y7IVZ7MlRbdIxNSNlA2t+nFSy80cmi2eDf9F6w11jpZnnLwzUeest2ZXqLOq6tGMmcW4hoqNI9ZWSEIAgCAIAgCAIAgB3IDm97d6zTGbO3VIHyavN3zzdP4YOxbLFBEgu+8PcoW/MSY2JULsKaDIpImMkwFZjIiaLZJMrEpGUiHM5VpsliiDMVXmyaJCfvVZ8kqL3DWoJgfhd9FJH3Gav3jZvR08us9Q0nOrUHHLLWld/wp/wCFr4/g5d8v8i+RtS6ZSCAIAgCAIAgCAIAgOcaRMMGmD3EYEga4Z45bj6hebv1pun+h2LV5oIue7EuetVm/MTLgzRyKSMjRoztlUqkaaQ6VHIYI8kihlIkSIcz8qvNkqRH4qI3Mkh1LfK7dlp8lNHaBG+TaPR5EWWSV53SVDiOwAD9l3vCotUM93+DmXzzVwbQumUggCAIAgCAIAgCAIDSPSFRua6luMY2t+6eereW/uuN4tS2jUXyOjYT5geV60TU7Jmd65Et1kvLnBVknNYUzLiZRLzUmo10h0qxrGkwvkWkpGyRgccqJvJukGtL3ADeiWWZbwWXaTEcdNHkveRsG/kpZekURx7s6PYqI2+1U1KcazGDX/Mdp8V6q2peypRh2OHVnrm5E9TkYQBAEAQBAEAQBAEBrum92tVts0ousuyUFscTMGR7uGqOR47gjtuoi6eNmY9t7FqZz2xXSOSFrg7MMu3b7p4rylejUtqrpVOTu06ka0FOB60sRb0mbW/RQShjdEsZZ5MWsQo8m2BrFMjBQrBkAEnABPYmMgzOcykiMsm/q6+SnUdCyR51PBi0VqKCr0ojjr6qNtS0B8ULj+N3ADhs343ldTw2ynU/9El5V9/4+5SvLmMF7JPdnUhhdw5hVAEAQBAEAQBAEAQGu6Z6V0ujFv9ZIBLVy5FPT5xrHrPU0cSpqNF1ZfAjqVFBfE445tZfqx91vkzpC/cHbBq8AOpo6v/HqRioR0xRQlJt5ZfDValU2KFoERyMd2xUb/wAOhd08S2kuH2LNpeSoT249V/fU9+guboRqZ12fCTtavFXFtWtZaai27+jPSUa1OvHMGemyekqMEPDXHgdhUDUZEybRk9mB2iTPdla+z+JnWUMMbOlJIAOZwsqmlyzGt+hgmuEEALYBru6xu+aZjHgYb5PGq6t0pc97tYtBPJvYutYeEVLhqdXaP1Zz7vxCNFaae8voeBVW8VTfa6V33udY4ONY8MdRXsqUY04qCWEjzs5OcnJvLZ0X0c6dGucyzXt+K0dGCd+z12Pdd/N9e3fVubbR5o8FmjWz5ZcnRgchUiyVQBAEAQBAEAQEG9XOns9snuFY/Vhhbk43uPADmTs71tCDnJRRrKSiss4U+ep0lu894ujui53RZklrQNzRyHicnrXYjFU46YnPlJyepl1XUmV2ozZGPFSxjghkyMBqua8bwcraUcownhnqys6AlaSBq62QeCpVKUZpwksr4liE3F6ovBn0cxdfaIZHFk0ZDmEe8zd4H6rhXvglFYlDKOtbeJVHtLc9Y2aYbGy7Oxc1+EP0n9P5LvXr1iXx2OSQgPk+QW0fCF/1MxK/7RNUNb666TwRuPs4cWxHrxs389679t4Vb0IqSjl93ucivf1akms4XwJFwAhonN9+Toj9104R3yUZM8ymndTPyNrTvb1qWUdRongrdKQTsFZSEiQbct2E8+0LRPGzN+eDrPo40rOkVsMFW4faNKAJf6jeD/2PPtC5lxR9nLK4Zeo1Naw+TcVXJggCAIAgCAFAcj9Lt3krrrS2Cmd93FiWbHF5zgdzcn/MuhZwxFzZTuJ5ek12rc2mp2UsIAaB4K7FZeSrIhBSo0LgsmCUyp/sklO4bHDonq6wtHDLybJ7YMmj9R9nXqlqXHEYfqSDhqu2Hz7lHXpa4NI3pT0zTOtuodu7wXDOqedpGRbLDW1Q2PbHqs/M4ho8SpaMNdRRI6stMGzkMDPVSMePdcD8l2sHLySbhVGqnL8YYNjG9QRRwG8kQoCRQVHqpdQnoPPHgVpNbG8WZKCvk0X0kprnBkQh33jB7zD+Jv7juWkoKrBxZvGWiWT6Bp546iGOaFwfHI0PY4HIcCMgrjPZ4Z0luZEAQBAEAQFHEBpJ2AID59jqHXTSS53KU5Mkz3N5Au6I7mgBdpLTBRRzX5pNkeeT1k7389nYpVsiJ7splbGpUFZBdlZMFCcjBQHZdG7l7fYqOoc7LzHqvP8AM3YfELhV4aKjidalLVBM130nV+rb6OiacGaUyEcmjzcFYsY+Zy7EF3LyqJzkuXTKJYSsGS0rALSsGUTK0e12oyEdJg1jnlv8FGtpEnodV9E1zNw0SihcenRSGnP5QAW/7XAdy513DTVz3LtvLMDc1WJggCAIAgItzk9XQVJG8QvI+RWY8oxLg+fNGz/Y5nHecZ+S7c+TmR4MbTsW5GUDsnkEyZMmVsalcoBlAb96O63NvqqUnJil1x2OHmFzL6OJqXcvWkvK0eL6QKv2i+CMHZDC1vecn9wp7OOKee5FdPM8GsZVsrlpKwZKErAMbXZyDvBWDY9C3dOnnjO0eYUc+TaPBuHoTqCyS7U/D7t//IKrfL3WWLV8o6uqBbCAIAgCAhXAa8b4ydj2lp70XIOAWZvs1VV0bxh8biwt5tJBXbbykzmJYyjBP904sO8HC2zsaYKM2NWUYZflZMDWQDWQGx6CVJjvT4idk0JGOsggjwz81UvFmnnsWbV4ng8m+1HtN5rZifxTOA7BsHgFPRjpppEVR5m2QMqQ0KEoC0lYyZI0ztSYHgQo5PDNluj1bY7VpZpTsHkFq3lmVsbZ6G43euuk+NhEbM8+kVWvX7qLFsuWdcjOWhUC2XIAgCAICHWNPBAcY09t7rNpMLhE3FPWHXcR8e5479/eV07aeunpfKKNeOmeTx7jGJHNqIuk3GXY+qmi98MiaIgKlRoVBQwVygwMoME6yVYo7tS1DjhrX9I8iMKOtHXBo3pvTNMgl5eS529xye1SLY1LcrAKEoC0rBkxTROl1Q0bc/JaT4ybwJM0wgofZ2+9szy4rWnu8szPY6x6NrS+2aPxGVhbNVO9oeCNoyBqj/SB35VC6nrqfIt0IaYfM3uMYYFXJi5AEAQBAY5Wa7SgNb0lskN5t0tHUghrjlrwNrHDcQpKVR05KSNJwU1pZx6qp63RyuNFcoiWH8D2jovHW3r5jgupGUaq1RKLi4PEivqKWq6dPKB1gcO7gs5aNdOeC022QbpGnuKzrRjSU+zpfjj8U1oaSv2dL8bPHyTWhpZT7Om+NnimtDSx9nTfGzxTWhpZT7Ol/vGeKa0NLH2bLxkZ3ZWNaM6S8W+OPbNNs+Sauw0mCsq6WGH1dMAcHeN3zT2blyZzg2HQnRCe6VcdxusRZSNOvHG8YMxG7Z8P17FBXuIwWiBLRpOT1S4OxUsONuMLml0mhAEAQBAEAQGKaESDcgPGu1mpq+B0FZTxzRHbqvbnb1jqPNbRlKLzExKKksM0G5+jamLy+31csH8kjdcDsOw/VW43sltJZK8rZejPHl0GvMJIiroiPzvapesp+qNOnl3I7tEr63fVR/rP8lnq6XZmOnmYzotfB/FM/Wd5J1dLszPTzKf/ADN7/wAQ39Z3knV0uz/Yx08wNGL3/iWfrO8k6ul2f7Dp5l40Uvh/iWfrO8k6ul2Y6eZkZobfX/xUQB/rP8k6ul2HTz7kyl9HddO4GquMbRnbqsLz4kLV3sfSJsrZ+rNssWgVqtz2yuhNVMDkST4OOxu7wVapc1J7cIlhRhE3anpQwDICrkxLaABsQFUAQBAEAQBAEBQgHeEBhkpmP4YQESW3g7sICJJbeXggI77Zt3eCAsNs5eCAq22cvBAZmWzl4ICTFbeXggJkVC1u/CAksiazcEBegCAIAgCAIAgCAIAgCAIAgKao6ggKajfhCArqt6ggGB1ICqAIAgCAIAgCAID/2Q==",
    name: "John Doe",
    role: "Software Engineer",
    email: "johndoe@email.com",
    phone: "+91 9876543210",
    skills: ["React", "HTML", "JavaScript", "Angular"],
  };

  return (
    <div className="resume-card">
      {/* Profile Image */}
      <div className="resume-image">
        <img src={person.image} alt={person.name} />
      </div>

      {/* Name & Details */}
      <div className="resume-details">
        <h1>{person.name}</h1>
        <p className="role">{person.role}</p>
        <p className="contact">
          {person.email} | {person.phone}
        </p>
      </div>

      {/* Skills */}
      <div className="resume-skills">
        <h2>Skills</h2>
        <ul>
          {person.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
