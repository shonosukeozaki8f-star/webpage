const targets = document.querySelectorAll('.scroll-fade');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 画面に入った時：クラスを付ける
            entry.target.classList.add('is-show');
        } else {
            // 画面から出た時：クラスを外す（これで何度でも動くようになります）
            entry.target.classList.remove('is-show');
        }
    });
}, {
    threshold: 0.1 // 10%見えたら実行
});

targets.forEach(target => {
    observer.observe(target);
});





window.addEventListener('scroll', () => {
    const section = document.getElementById('sticky-section');
    const ball = document.getElementById('anim-ball');
    
    if (!section || !ball) return;

    const rect = section.getBoundingClientRect();
    const scrollDistance = -rect.top;
    const sectionHeight = section.offsetHeight - window.innerHeight;
    
    if (scrollDistance >= 0 && scrollDistance <= sectionHeight) {
        let progress = scrollDistance / sectionHeight;
        
        // 1. 大きさの計算（画面を覆い尽くすなら 30〜50倍 程度が必要な場合があります）
        let scale = 1 + (progress * 40);
        
        // 2. 位置の調整（もともと左側に配置されている場合、その分を打ち消して中央へ）
        // ボールが最初から中央付近にいるなら 0 でOK
        // もし右に寄せたいならプラス、左ならマイナスの値を progress に掛け合わせます
        let moveX = progress * 0; 
        let moveY = progress * 0;

        ball.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
        ball.style.opacity = 1;
        ball.style.visibility = "visible";
    } else if (scrollDistance > sectionHeight) {
        // スクロールしきった後は、次のコンテンツの邪魔にならないよう消す設定
        ball.style.opacity = 0;
        ball.style.visibility = "hidden";
    } else {
        // セクションより上にいる時
        ball.style.transform = `scale(1)`;
        ball.style.opacity = 1;
        ball.style.visibility = "visible";
    }
});



window.addEventListener('scroll', () => {
    const section = document.getElementById('kuma-sticky-section');
    const kuma = document.getElementById('anim-kuma');
    
    if (!section || !kuma) return;

    const rect = section.getBoundingClientRect();
    const scrollDistance = -rect.top;
    const sectionHeight = section.offsetHeight - window.innerHeight;
    
    if (scrollDistance >= 0 && scrollDistance <= sectionHeight) {
        let progress = scrollDistance / sectionHeight;
        
        // 1. 小さくなる計算 (1倍から0.3倍へ)
        let scale = 1 - (progress * 0.7);
        
        // 2. 画面中央へ寄る計算
        // 左下の(0,0)付近から、親要素の中央へ移動させる
        // 画像のサイズや配置に合わせて数値を調整してください
        let moveX = progress * 200; // 右方向へ移動
        let moveY = progress * -180; // 上方向へ移動（マイナスで上へ）

        kuma.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
        kuma.style.opacity = 1;
    } else if (scrollDistance > sectionHeight) {
        // スクロールしきった後の状態を維持
        kuma.style.opacity = 1;
    } else {
        // セクションより上の時（初期状態）
        kuma.style.transform = `translate(0, 0) scale(1)`;
    }
});