"use client";
import React from "react";
import { NavigationBar } from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/store/slice/counterSlice";
import { Button } from "@nextui-org/react";

export default function HeroPage() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="">
      <NavigationBar />
      <h1 className="text-lg bg-stone-200	">{count}</h1>
      <Button
        color="primary"
        onClick={() => dispatch(increment())}
        className="text-lg"
      >
        Increment
      </Button>
      <Button color="primary" onClick={() => dispatch(decrement())} className="text-sm mx-3">
        Decrement
      </Button>
      <Button color="primary" onClick={() => dispatch(incrementByAmount(5))} className="text-sm">
        Increment by 5
      </Button>
    </div>
  );
}
