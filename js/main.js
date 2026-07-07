window.addEventListener('load', function () {
    const header = document.getElementById('siteHeader');

    const toggleHeaderState = () => {
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    };

    toggleHeaderState();
    window.addEventListener('scroll', toggleHeaderState, { passive: true });

    const dropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', function (event) {
            const isMobile = window.innerWidth <= 992;
            if (!isMobile) return;

            const parentItem = this.closest('.nav-item.dropdown');
            const dropdownMenu = parentItem?.querySelector('.dropdown-menu');
            const isOpen = parentItem?.classList.contains('show');

            event.preventDefault();
            event.stopPropagation();

            document.querySelectorAll('.navbar .nav-item.dropdown.show').forEach((item) => {
                if (item !== parentItem) {
                    item.classList.remove('show');
                    const menu = item.querySelector('.dropdown-menu');
                    if (menu) {
                        menu.classList.remove('show');
                    }
                }
            });

            if (!isOpen) {
                parentItem?.classList.add('show');
                dropdownMenu?.classList.add('show');
                this.setAttribute('aria-expanded', 'true');
            } else {
                parentItem?.classList.remove('show');
                dropdownMenu?.classList.remove('show');
                this.setAttribute('aria-expanded', 'false');
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (window.innerWidth > 992) return;

        const clickedInsideDropdown = event.target.closest('.nav-item.dropdown');
        if (!clickedInsideDropdown) {
            document.querySelectorAll('.navbar .nav-item.dropdown.show').forEach((item) => {
                item.classList.remove('show');
                const menu = item.querySelector('.dropdown-menu');
                if (menu) {
                    menu.classList.remove('show');
                }
            });
        }
    });

    if (window.jQuery && $.fn.slick) {
        $('.slick-clientes').not('.slick-initialized').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
});
