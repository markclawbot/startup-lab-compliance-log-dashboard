// ====================================
// Clinical Compliance Dashboard
// Interactive Behaviors
// ====================================

// Alert Expansion Toggle
function expandAlert(alertElement) {
    const details = alertElement.querySelector('.alert-details');
    if (!details) return;
    
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        alertElement.style.background = getComputedStyle(alertElement).getPropertyValue('background-color');
    } else {
        details.style.display = 'none';
    }
}

// Compliance Trend Chart (using Chart.js CDN)
function initComplianceChart() {
    const canvas = document.getElementById('complianceChart');
    if (!canvas) return;
    
    // Check if Chart.js is available, otherwise load it
    if (typeof Chart === 'undefined') {
        loadChartJS().then(() => renderChart(canvas));
    } else {
        renderChart(canvas);
    }
}

function loadChartJS() {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
        script.onload = resolve;
        document.head.appendChild(script);
    });
}

function renderChart(canvas) {
    const ctx = canvas.getContext('2d');
    
    // 30-day mock data showing realistic compliance trend (85-98% range)
    const last30Days = [];
    const complianceScores = [];
    
    for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        last30Days.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
        
        // Generate realistic compliance scores (trending 95-98%, occasional dips to 88-92%)
        let score;
        if (i % 7 === 0) {
            score = 88 + Math.random() * 4; // Weekly dip
        } else {
            score = 94 + Math.random() * 4;
        }
        complianceScores.push(Math.round(score * 10) / 10);
    }
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: last30Days,
            datasets: [{
                label: 'Compliance %',
                data: complianceScores,
                borderColor: '#0D7F79',
                backgroundColor: 'rgba(13, 127, 121, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#0D7F79',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#111827',
                    bodyColor: '#374151',
                    borderColor: '#E5E7EB',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return 'Compliance: ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    min: 80,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: '#6B7280',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: '#F3F4F6',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 0,
                        autoSkip: true,
                        maxTicksLimit: 8,
                        color: '#6B7280',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
    
    // Add threshold line annotation (optional)
    addThresholdLine(ctx, 95);
}

function addThresholdLine(ctx, thresholdValue) {
    // This would be implemented with Chart.js annotation plugin if needed
    // For MVP, we're keeping it simple
}

// Time Range Selector
function initTimeRangeSelector() {
    const buttons = document.querySelectorAll('.time-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // In a real app, this would reload chart data for the selected range
            console.log('Time range selected:', this.textContent);
        });
    });
}

// Quick Actions Click Handlers
function initQuickActions() {
    const actionButtons = document.querySelectorAll('.action-button');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const actionText = this.querySelector('span').textContent;
            
            // Simulate action
            showNotification('Opening ' + actionText + '...', 'info');
            
            // In a real app, this would navigate to the relevant page or open a modal
        });
    });
}

// Generate Report Button
function initReportGenerator() {
    const reportBtns = document.querySelectorAll('.btn-primary');
    reportBtns.forEach(btn => {
        if (btn.textContent.includes('Generate Report')) {
            btn.addEventListener('click', generateReport);
        }
    });
}

function generateReport() {
    // Simulate report generation with loading state
    const btn = event.target;
    const originalText = btn.textContent;
    
    btn.textContent = 'Generating...';
    btn.disabled = true;
    btn.style.opacity = '0.6';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
        
        showNotification('Audit report generated successfully!', 'success');
        
        // In a real app, this would trigger PDF download
        console.log('Report generated for date range: Last 90 days');
    }, 2000);
}

// Alert Action Buttons
function initAlertActions() {
    const alertBtns = document.querySelectorAll('.btn-alert');
    alertBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent alert expansion when clicking button
            
            const actionText = this.textContent;
            showNotification(actionText + ' in progress...', 'success');
            
            // In a real app, this would open a scheduling modal or perform the action
        });
    });
}

// Notification System (Simple Toast)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        bottom: 32px;
        right: 32px;
        background: ${type === 'success' ? '#2D7A5F' : type === 'info' ? '#0D7F79' : '#E07A5F'};
        color: white;
        padding: 16px 24px;
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Navigation Item Click Handlers (simulate routing)
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Don't change active state for prototype (dashboard is the only page)
            // In a real app, this would navigate to different pages
            const pageName = this.querySelector('span').textContent;
            
            if (pageName !== 'Dashboard') {
                showNotification(`Navigating to ${pageName}...`, 'info');
            }
        });
    });
}

// Smooth Scrolling for Internal Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize All Interactive Features
function init() {
    console.log('🦞 Clinical Compliance Dashboard initialized');
    
    // Core features
    initComplianceChart();
    initTimeRangeSelector();
    initQuickActions();
    initReportGenerator();
    initAlertActions();
    initNavigation();
    initSmoothScroll();
    
    // Welcome message
    setTimeout(() => {
        showNotification('Dashboard loaded successfully', 'success');
    }, 500);
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for testing/debugging
window.complianceDashboard = {
    expandAlert,
    generateReport,
    showNotification
};
