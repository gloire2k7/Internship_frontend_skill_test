export default function Footer() {
  return (
    <footer className="bg-background-gray border-t border-background-gray pt-8 pb-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 mb-6 md:mb-0 justify-center">
            <span className="inline-block w-8 h-8 align-middle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_106_34625)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.262 10.0581L12.4513 18.8401C14.3523 22.2078 15.9036 23.3903 18.9512 23.27C21.9358 23.1521 25.3719 19.0921 23.4369 15.6179L18.619 7.0753C18.4467 7.65027 17.4396 9.68849 17.2619 10.0581L17.262 10.0581ZM10.1434 20.6543C4.8786 27.3598 -2.71675 19.959 0.977333 14.1981C0.977333 14.1981 4.90991 7.3063 6.43925 4.62135C7.62519 2.53926 8.95382 1.22901 10.6813 0.809006C12.7879 0.29685 15.2547 1.4106 16.5697 3.44183C17.4837 4.85338 18.2925 6.1454 16.8671 8.5858C16.6977 8.87568 10.4768 20.2296 10.1434 20.6542V20.6543ZM10.5191 8.2514C9.08019 7.4219 9.08019 5.33685 10.5191 4.50735C11.9579 3.67785 13.7662 4.72035 13.7662 6.37935C13.7662 8.03835 11.9579 9.0809 10.5191 8.2514Z" fill="#5FD788"/>
                </g>
                <defs>
                  <clipPath id="clip0_106_34625">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-dark-text font-semibold text-lg">Toutem</span>
          </div>
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-8 w-full md:justify-center items-center md:items-start">
            <div className="text-center md:text-left">
              <h4 className="text-green font-semibold mb-2">Customer Support</h4>
              <ul className="text-gray-text text-sm space-y-1">
                <li>Shipping</li>
                <li>Free Return</li>
                <li>Track your Order</li>
                <li>Gift Cards</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-green font-semibold mb-2">About Us</h4>
              <ul className="text-gray-text text-sm space-y-1">
                <li>Our Values</li>
                <li>Sustainability</li>
                <li>Brand Ambassadors</li>
                <li>Fitness Professionals</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-green font-semibold mb-2">Customer Service</h4>
              <ul className="text-gray-text text-sm space-y-1">
                <li>Help</li>
                <li>Leader Support</li>
                <li>Pleasant Grove Product Center</li>
                <li>Recall—Important Safety Information</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-text text-xs mt-8">
          <p>copyright © 2022 Toutem<br />all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 