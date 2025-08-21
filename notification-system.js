class NotificationSystem {
    constructor(options = {}) {
        this.options = {
            showDefaultNotifications: true,
            ...options
        };
        this.init();
    }

    init() {
        this.createNotificationSystem();
    }

    createNotificationSystem() {
        const notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);

        // Only show default notifications if enabled
        if (this.options.showDefaultNotifications) {
            // Show welcome notification after 3 seconds
            setTimeout(() => {
                this.showNotification('Welcome to SpinMasterz! 🏓', 'Book your first session and get 20% off!', 'success');
            }, 3000);

            // Show booking reminder after 30 seconds
            setTimeout(() => {
                this.showNotification('Ready to start?', 'Our coaches are waiting to help you improve your game!', 'info');
            }, 30000);
        }
    }

    showNotification(title, message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas ${this.getNotificationIcon(type)}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-title">${title}</div>
                <div class="notification-message">${message}</div>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        const container = document.querySelector('.notification-container');
        container.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Auto remove after specified duration
        setTimeout(() => {
            this.removeNotification(notification);
        }, duration);

        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.removeNotification(notification);
        });
    }

    removeNotification(notification) {
        notification.classList.add('removing');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        return icons[type] || icons.info;
    }
}

// Initialize the notification system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NotificationSystem();
});
