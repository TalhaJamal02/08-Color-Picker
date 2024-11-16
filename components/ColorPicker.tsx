"use client";
import { useState, ChangeEvent } from 'react'
import { Card, CardTitle, CardDescription } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { toast } from 'sonner';

function ColorPicker() {

  const [color, setColor] = useState<string>("#000000")

  const handleColorCh = (e: ChangeEvent<HTMLInputElement>): void => {
    setColor(e.target.value)
  }

  const copyClipboard = (): void => {
    navigator.clipboard.writeText(color);
    toast("Copied Sucessfully! ✅",)
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-300 dark:bg-gray-900 shadow-xl">
        <Card className="w-full max-w-md mx-auto p-8 grid gap-8">
          <div className="text-center space-y-2 text-lg">
            <CardTitle>Color Picker</CardTitle>
            <CardDescription>
              Select a color and copy the hex and RGB values.
            </CardDescription>
          </div>
          <div className="grid gap-4">
            <div
              className="w-full h-48 rounded-lg border-4 border-gray-200 dark:border-gray-800"
              style={{ backgroundColor: color }}
            />
            <div className="grid gap-2 text-center">
              <div className="text-2xl font-semibold">{color}</div>
              <div className="text-gray-500 dark:text-gray-400">
                RGB: {parseInt(color.slice(1, 3), 16)},{" "}
                {parseInt(color.slice(3, 5), 16)},{" "}
                {parseInt(color.slice(5, 7), 16)}
              </div>
              <Button
                onClick={copyClipboard}
                variant="default"
                className="w-full"
              >
                Copy to Clipboard
              </Button>
            </div>
            <Input
              type="color"
              value={color}
              onChange={handleColorCh}
              className="w-full h-16 p-0 border-0 rounded-md cursor-pointer"
            />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ColorPicker