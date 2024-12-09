CREATE TABLE `sys_settings` (
                              `id` bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                              `user_id` bigint NOT NULL,
                              `key` varchar(100) NOT NULL,
                              `title` varchar(100) NOT NULL,
                              `setting` varchar(1024),
                              `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                              `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
