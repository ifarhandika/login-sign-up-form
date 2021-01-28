const signUpBtn = document.querySelector('.sign-up-btn');
const signInBtn = document.querySelector('.sign-in-btn');
const signUp = document.querySelector('.sign-up');
const signIn = document.querySelector('.sign-in');

function changeSlide() {
    signUpBtn.addEventListener('click', () => {
        console.log('Hello');
        signUpBtn.style.borderBottom = '2px solid white';
        signInBtn.style.border = 'none';
        signUp.classList.remove('inactive');
        signIn.classList.add('inactive');
        signUp.classList.add('active');
        signUp.style.animation = 'fade 0.5s ease';

        signUp.addEventListener('animationend', () => {
            signUp.style.animation = '';
        })
    })

    signInBtn.addEventListener('click', () => {
        console.log('Hello');
        signInBtn.style.borderBottom = '2px solid white';
        signUpBtn.style.border = 'none';
        signIn.classList.remove('inactive');
        signUp.classList.add('inactive');
        signIn.classList.add('active');
        signIn.style.animation = 'fade 0.5s ease';

        signIn.addEventListener('animationend', () => {
            signIn.style.animation = '';
        })
    })
}

function forgotPass() {
    const forgotBtn = document.querySelector('.forgot');

    forgotBtn.addEventListener('click', () => {
        signUpBtn.style.borderBottom = '2px solid white';
        signInBtn.style.border = 'none';
        signUp.classList.remove('inactive');
        signIn.classList.add('inactive');
        signUp.classList.add('active');
        signUp.style.animation = 'fade 0.5s ease';

        signUp.addEventListener('animationend', () => {
            signUp.style.animation = '';
        })
    })
}

function signNow(){
    const signNowBtn = document.querySelector('.have-acc');

    signNowBtn.addEventListener('click', () => {
        signInBtn.style.borderBottom = '2px solid white';
        signUpBtn.style.border = 'none';
        signIn.classList.remove('inactive');
        signUp.classList.add('inactive');
        signIn.classList.add('active');
        signIn.style.animation = 'fade 0.5s ease';

        signIn.addEventListener('animationend', () => {
            signIn.style.animation = '';
        })
    })

}
changeSlide();
forgotPass();
signNow();