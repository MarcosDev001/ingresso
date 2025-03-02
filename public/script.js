document.getElementById('openModal').addEventListener('click', function () {
    document.getElementById('loginModal').style.display = 'flex';
});
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('loginModal').style.display = 'none';
});
document.getElementById('showLogin').addEventListener('click', function () {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
});
document.getElementById('showRegister').addEventListener('click', function () {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const checkoutModal = document.getElementById('checkoutModal');
    const closeModal = document.getElementById('closeModal');
    const continueBtn = document.getElementById('continueBtn');
    const finalizeBtn = document.getElementById('finalizeBtn');
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    const step2Circle = document.getElementById('step2Circle');
    const step3Circle = document.getElementById('step3Circle');

    document.getElementById('openCheckout').addEventListener('click', function () {
        checkoutModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', function () {
        checkoutModal.classList.add('hidden');
    });

    // Fechar modal ao clicar fora
    window.addEventListener('click', function (event) {
        if (event.target === checkoutModal) {
            checkoutModal.classList.add('hidden');
        }
    });

    if (continueBtn) {
        continueBtn.addEventListener('click', function () {
            section1.classList.add('hidden');
            section2.classList.remove('hidden');

            step2Circle.classList.remove('bg-gray-400');
            step2Circle.classList.add('bg-purple-500');
        });
    }

    if (finalizeBtn) {
        finalizeBtn.addEventListener('click', function () {
            console.log("Finalizar clicado!");

            section2.classList.add('hidden');
            section3.classList.remove('hidden');

            step3Circle.classList.remove('bg-gray-400');
            step3Circle.classList.add('bg-purple-500');
        });
    }

    document.getElementById('paymentForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Pagamento processado com sucesso!");
        checkoutModal.classList.add('hidden');
    });
});
