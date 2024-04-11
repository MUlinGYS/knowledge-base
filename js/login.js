    var title = document.querySelector('.title');
    var iconContainer = document.querySelector('.icon-container');
    var titleContainer = document.querySelector('.title-container');
    var ro = new ResizeObserver(entries => {
        for (let entry of entries) {
            const cr = entry.contentRect;
            if (cr.width < 380) {
                iconContainer.style.display = 'none';
                titleContainer.style.width = '100%';
            } else {
                iconContainer.style.display = 'flex';
                titleContainer.style.width = '60%';
            }
        }
    });

    // 观察title元素
    ro.observe(title);