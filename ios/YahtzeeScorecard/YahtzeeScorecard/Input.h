// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

#import <Lynx/LynxUI.h>

NS_ASSUME_NONNULL_BEGIN

@interface LynxTextField : UITextField

@property(nonatomic, assign) UIEdgeInsets padding;

@end

@interface InputComponent : LynxUI <LynxTextField *> <UITextFieldDelegate>

@end

NS_ASSUME_NONNULL_END
