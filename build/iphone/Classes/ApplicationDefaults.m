/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"MHtVzkpqKIvB6Lys1kghhx4JpgkgTG5H"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"t38RI9izzYzH49OOAYdSt80yKeYdZkXt"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"SqgfgEmLB0RXPPiS4Z4hX5qTBg4uczfR"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"vlEQRhzOhmLtKAqVudJPr6vk6A8pHiAH"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"o9Js96p3xD79Y3UwqVlqqvVLmfbs3EJL"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"U950ynx2zRiK3lEIaZ1AoCM2tnkWXU6l"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
