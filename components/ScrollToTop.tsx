import { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

export default function ScrollToTop() {
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 340) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  return (
    <div>
      {/* 👇️ scroll to top on button click */}
      {scrollTop && (
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-10 right-10 rounded-full p-4 bg-secondary text-white"
        >
          <MdOutlineKeyboardDoubleArrowUp />
        </button>
      )}
    </div>
  );
}
