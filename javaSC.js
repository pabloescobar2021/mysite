
    function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
    }

          


    /**     ��������       */
    let currentIndex1 = 0;
    const images1 = document.querySelectorAll('.ContIMG img');
    const totalImages1 = images1.length;
    const indicatorsContainer = document.getElementById('indicators');

    /*   // ������� ����������� ��������      */
    function moveCarousel1(direction) {
                        const imageWidth = document.querySelector('.ContForPhotos').clientWidth; // �������� ������ ���������� .con

    currentIndex1 += direction;

    if (currentIndex1 < 0) {
        currentIndex1 = totalImages1 - 1;
                        } else if (currentIndex1 >= totalImages1) {
        currentIndex1 = 0;
                        }
    const offset = -currentIndex1 * imageWidth; // ���������� ������ ���������� ��� ��������
    document.querySelector('.ContIMG').style.transform = `translateX(${offset}px)`;
    updateIndicators(); // ��������� ����������
                    }
    function updateIndicators() {
        // ������� ��� ������������ ����������
        indicatorsContainer.innerHTML = '';

    // ������� ����� ����������
    for (let i = 0; i < totalImages1; i++) {
                            const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === currentIndex1) {
        indicator.classList.add('active');
                            }
    indicatorsContainer.appendChild(indicator);
                        }
                    }
    function startAutoSlide() {
        setInterval(() => {
            moveCarousel1(1); // ������� �������� ������ �� ���� �����
        }, 10000); // 3000 ����������� = 3 �������
                    }
    window.onload = startAutoSlide;
                    // ���������� ������ ����������� ��� ��������� ������� ������
                    window.addEventListener('resize', () => {
        moveCarousel1(0); // ����������� �������� �� ������� ������ ��� ��������� ������� ������
                    });






           /**  ��������� ����  -----------------------     */
        // �������� ��������
    const modal = document.getElementById("consultationModal");
    const btn = document.getElementById("openModalBtn");
    const btn2 = document.getElementById("openModalBtn2");
    const closeBtn = document.querySelector(".close");
    const phoneInput = document.getElementById("phone");
    const form = document.getElementById("consultationForm");

    // �������� ���������� ���� � ������� ����� ��������� ������
    btn.onclick = function () {
        modal.style.display = "flex";
    form.reset(); // ������� ���� ����� ��� �������� ���������� ����
        }
    btn2.onclick = function () {
        modal.style.display = "flex";
    form.reset(); // ������� ���� ����� ��� �������� ���������� ����
        }

    // �������� ���������� ���� ��� ������� �� �������
    closeBtn.onclick = function () {
        modal.style.display = "none";
        }

    // ��������� ����� ����� ���������
    form.onsubmit = function (event) {
        event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // ���������� ��������� ��� �������� ����������� ����� ������ ��������
    const phonePattern = /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/;

    if (name.trim() === "") {
        alert("����������, ������� ���� ���.");
            } else if (!phonePattern.test(phone)) {
        alert("����������, ������� ���������� ����� ��������.");
            } else {
        alert("������� �� ������!");
    modal.style.display = "none";
            }
        }

    // ������� ��� �������������� ������ ��������
    phoneInput.addEventListener("input", function () {
        let value = phoneInput.value.replace(/\D/g, ''); // ������� ��� ������� ����� ����

            // ������������ ����� ����� 11 ������� (��� ����� ������������� ��������)
            if (value.length > 11) value = value.slice(0, 11);
    let formattedValue = '+7 ';
            if (value.length > 1) {
        formattedValue += value.slice(1, 4); // ������ ��� ����� ����� ���� ������
            }
            if (value.length >= 5) {
        formattedValue += ' ' + value.slice(4, 7); // ��������� ��� �����
            }
            if (value.length >= 7) {
        formattedValue += '-' + value.slice(7, 9); // ������ ��� ����� ����� ������ ������
            }
            if (value.length >= 9) {
        formattedValue += '-' + value.slice(9, 11); // ��������� ��� �����
            }
    phoneInput.value = formattedValue;
        });
    // �������������� ���������� ���� ������ ��� ������ �� ���� ����� ��������
    phoneInput.addEventListener("focus", function () {
            if (this.value === '') {
        this.value = '+7 '; // ��� ������ (������)
            }
        });

/*     -----------------------       */



                    /* CSS GIF */
    
        const container = document.querySelector('.container_for_text');
        const gifs = [
        'img/gif1.gif', // �������� �� ���� � ����� GIF
        'img/gif2.gif'

        ];
        let currentGifIndex = 0;

        function changeBackground() {
            container.style.backgroundImage = `url(${gifs[currentGifIndex]})`;
        currentGifIndex = (currentGifIndex + 1) % gifs.length;

        // ������� ����� ������ ������� GIF
        setTimeout(changeBackground, 10000); // 5000 ����������� = 5 ������
            }

        // ����� ��������
        changeBackground();
    