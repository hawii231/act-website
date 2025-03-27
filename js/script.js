if (document.getElementById("typed")) {
  const typedElement = document.getElementById("typed");
  const strings = document.querySelectorAll("#typed-strings p");
  let currentStringIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typingSpeed = 200; // Typing speed
  const backSpeed = 100; // Backspacing speed
  const backDelay = 200; // Delay before starting to backspace
  const startDelay = 500; // Delay before starting to type

  function type() {
    const currentString = strings[currentStringIndex].textContent;

    // Typing the current string
    if (!isDeleting) {
      typedElement.textContent = currentString.substring(
        0,
        currentCharIndex + 1
      );
      currentCharIndex++;

      // If finished typing the current string, wait before deleting
      if (currentCharIndex === currentString.length) {
        setTimeout(() => {
          isDeleting = true;
          setTimeout(type, backDelay);
        }, typingSpeed);
      } else {
        setTimeout(type, typingSpeed);
      }
    } else {
      // Backspacing the current string
      typedElement.textContent = currentString.substring(
        0,
        currentCharIndex - 1
      );
      currentCharIndex--;

      if (currentCharIndex === 0) {
        isDeleting = false;
        currentStringIndex = (currentStringIndex + 1) % strings.length;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, backSpeed);
      }
    }
  }

  setTimeout(type, startDelay); // Delay before starting
}
