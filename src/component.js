export const toggle = () => {
    const btn = document.querySelector('button');
    const e = document.querySelector('h1');

    btn.addEventListener('click', () => {
        e.innerHTML = "God is faithful to fail us!!!!"
    })
}