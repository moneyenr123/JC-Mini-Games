// This script automatically adds the Favicon and Apple tags to any page it's on
const head = document.head;

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.href = '../favicon.png';

const appleIcon = document.createElement('link');
appleIcon.rel = 'apple-touch-icon';
appleIcon.href = '../favicon.png';

const appleTitle = document.createElement('meta');
appleTitle.name = 'apple-mobile-web-app-title';
appleTitle.content = 'JC Mini Games';

const appleCap = document.createElement('meta');
appleCap.name = 'apple-mobile-web-app-capable';
appleCap.content = 'yes';

head.appendChild(favicon);
head.appendChild(appleIcon);
head.appendChild(appleTitle);
head.appendChild(appleCap);
