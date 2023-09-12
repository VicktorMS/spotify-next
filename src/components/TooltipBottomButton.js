import React from 'react'

export default function TooltipBottomButton() {
    return (
        <div class="hs-tooltip inline-block [--placement:bottom]">
            <button type="button" class="hs-tooltip-toggle w-10 h-10 inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white">
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.27921 4.64001L7.92565 10.2865C8.12091 10.4817 8.4375 10.4817 8.63276 10.2865L14.2792 4.64001" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                    Tooltip on bottom
                </span>
            </button>
        </div>
    )
}
