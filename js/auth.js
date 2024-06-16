import { auth, provider, signInWithPopup, onAuthStateChanged, signOut } from './Firebase/firebase';

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const userPhoto = document.getElementById('user-photo');
  const reservationForm = document.getElementById('reservation-form');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          localStorage.setItem('user', JSON.stringify(user));
          updateUI(user);
        })
        .catch((error) => {
          console.error('Error during sign-in:', error);
        });
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      signOut(auth).then(() => {
        localStorage.removeItem('user');
        updateUI(null);
      }).catch((error) => {
        console.error('Error during sign-out:', error);
      });
    });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
    updateUI(user);
  });

  function updateUI(user) {
    if (user) {
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'inline-block';
      userPhoto.src = user.photoURL || 'default-user.png';
    } else {
      loginBtn.style.display = 'inline-block';
      logoutBtn.style.display = 'none';
      userPhoto.src = 'default-user.png';
    }
  }

  const storedUser = JSON.parse(localStorage.getItem('user'));
  updateUI(storedUser);

  // Prevent form submission if user is not logged in
  if (reservationForm) {
    reservationForm.addEventListener('submit', (event) => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        event.preventDefault();
        Swal.fire('Error', 'Debes iniciar sesión para realizar una reserva.', 'error');
      }
    });
  }
});
