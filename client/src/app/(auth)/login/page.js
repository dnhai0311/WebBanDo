"use client";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

export default function Home() {
  const [variant, setVariant] = useState("Login");
  const [isLoading, setIsLoading] = useState(false);

  const changeVariant = useCallback(() => {
    variant === "Login" ? setVariant("Register") : setVariant("Login");
  }, [variant, setVariant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {};

  return (
    <div className="dark:bg-black flex flex-col items-center justify-center w-full h-full pt-20 lg:pb-10">
      <div className="w-[90%] md:w-[50%] lg:w-[30%]">
        <div className="flex flex-col items-center mb-8">
          <h1 className="mb-2 text-2xl font-bold text-center">
            {variant === "Đăng nhập" ? "Đăng nhập" : "Tạo mới tài khoản"}
          </h1>
          <div className="text-sm">
            {variant === "Login" ? (
              "Đăng nhập để tiếp tục"
            ) : (
              <p>
                Đã có tài khoản?
                <a
                  className="cursor-pointer hover:text-gray-500"
                  onClick={changeVariant}
                >
                  &nbsp;Đăng nhập ở đây.
                </a>
              </p>
            )}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          {variant === "Register" && (
            <div>
              <Label htmlFor="name">TÊN</Label>
              <Input
                disabled={isLoading}
                id="name"
                {...register("name", { required: true })}
                className="mt-4 bg-transparent focus-visible:ring-green-100 placeholder:text-slate-100"
                type="text"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-xs text-rose-300">Vui lòng nhập tên</span>
              )}
            </div>
          )}

          <div>
            <Label htmlFor="phone">SỐ ĐIỆN THOẠI</Label>
            <Input
              disabled={isLoading}
              id="phone"
              {...register("phone", { required: true })}
              className="mt-4 bg-transparent focus-visible:ring-green-100 placeholder:text-slate-100"
              type="text"
              placeholder="Số điện thoại"
            />
            {errors.phone && (
              <span className="text-xs text-rose-300">
                Vui lòng nhập số điện thoại
              </span>
            )}
          </div>
          <div>
            <Label htmlFor="password">MẬT KHẨU</Label>
            <Input
              disabled={isLoading}
              id="password"
              {...register("password", { required: true })}
              className="mt-4 bg-transparent focus-visible:ring-green-100 placeholder:text-slate-100"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-xs text-rose-300">
                Vui lòng nhập mật khẩu
              </span>
            )}
          </div>
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full transition"
          >
            {variant === "Login" ? "Đăng nhập" : "Đăng ký"}
          </Button>
        </form>

        {variant === "Login" && (
          <div className="mt-4">
            <p>
              Chưa có tài khoản?{" "}
              <a
                className="cursor-pointer hover:text-gray-500"
                onClick={changeVariant}
              >
                Chọn vào đây
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
