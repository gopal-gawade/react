import React, { useEffect, useRef, useState } from 'react'

const CustomKeyboardTab = () => {
    const [activeTab, setActiveTab] = useState(0)
    const tabs = [
        { id: 1, title: 'Tab 1', content: 'Tab 1 Dashboard' },
        { id: 2, title: 'Tab 2', content: 'Tab 2 Dashboard' },
        { id: 3, title: 'Tab 3', content: 'Tab 3 Dashboard' }
    ]

    const ref = useRef();

    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    const handleKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowRight':
                e.preventDefault();
                setActiveTab((prev) => (prev < tabs.length - 1 ? prev + 1 : prev))
                break;
            case 'ArrowLeft':
                e.preventDefault();
                setActiveTab((prev) => (prev > 0 ? prev - 1 : prev))
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const tabButtons = ref.current?.querySelectorAll('[role="tab"]');
        if (tabButtons && tabButtons[activeTab]) {
            tabButtons[activeTab].focus()
        }
    }, [activeTab])

    return (
        <div>
            <h3>Custom keyboard tabs</h3>

            <div
                ref={ref}
                role='tablist'
                aria-orientation='horizontal'
                onKeyDown={handleKeyDown}
            >
                {tabs.map((v, i) => {
                    return (
                        <button
                            key={i}
                            role='tab'
                            id={`tab-${v.id}`}
                            aria-selected={activeTab === i}
                            aria-controls={`panel-${v.id}`}
                            tabIndex={activeTab === i ? 0 : -1}
                            onClick={() => handleTabClick(i)}
                        >
                            {v.title}
                        </button>
                    )
                })}

                <div>
                    {tabs.map((v, i) => {
                        return (
                            <div
                                key={v.id}
                                role='tabpanel'
                                id={`tab-${v.id}`}
                                aria-labelledby={`tab-${v.id}`}
                                hidden={activeTab !== i}
                            >
                                {v.content}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CustomKeyboardTab
