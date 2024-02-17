/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/1xglASCcPPC
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ChatUI() {
    return (
        <div className="flex flex-col h-[600px] rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="flex-1 overflow-auto p-6">
                <div className="grid gap-4">
                    <div className="flex flex-col items-end gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Hi there! How can I assist you today? If you have any questions, feel free to ask.</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Bot</div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Can you provide me with tracking information?</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">You</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Sure! Let me check that for you. Please wait a moment while I look up the information.</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Bot</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>
                                I&apos;ve found the details. Your package is currently in transit and is expected to be delivered by the end
                                of the day.
                            </p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Bot 2:31 PM</div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Thank you for your help!</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">You 2:31 PM</div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Thank you for your help!</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">You 2:31 PM</div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Thank you for your help!</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">You 2:31 PM</div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Thank you for your help!</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">You 2:31 PM</div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Thank you for your help!</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">You 2:31 PM</div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Thank you for your help!</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">You 2:31 PM</div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Thank you for your help!</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">You 2:31 PM</div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Thank you for your help!</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">You 2:31 PM</div>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
                            <p>Thank you for your help!</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">You 2:31 PM</div>
                    </div>
                </div>
            </div>
            <div className="border-t flex items-center p-4">
                <Input className="flex-1 min-w-0" placeholder="Type a message..." type="text" />
                <Button className="ml-4" type="submit">
                    Send
                </Button>
            </div>
        </div>
    )
}
