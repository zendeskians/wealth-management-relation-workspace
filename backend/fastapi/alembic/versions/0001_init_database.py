"""Init database

Revision ID: 0001
Revises:
Create Date: 2022-08-09 00:00:00

"""
from alembic import op

# revision identifiers, used by Alembic.
revision = "0001"
down_revision = None
branch_labels = None
depends_on = None


UPGRADE_SQL = """
CREATE TABLE IF NOT EXISTS `wealth_manager` (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(32) NOT NULL,
    `password` varchar(60) NOT NULL,
    `email` varchar(256) NOT NULL,
    `name` varchar(32) NOT NULL,
    `dob` date NOT NULL,
    `address` varchar(256) NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime DEFAULT NULL,
    `is_active` bool DEFAULT TRUE,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`username`),
    UNIQUE KEY (`email`)
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `client` (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(32) NOT NULL,
    `password` varchar(60) NOT NULL,
    `email` varchar(256) NOT NULL,
    `name` varchar(32) NOT NULL,
    `dob` date NOT NULL,
    `address` varchar(256) NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime DEFAULT NULL,
    `is_active` bool DEFAULT TRUE,
    `wealth_manager_id` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`username`),
    UNIQUE KEY (`email`)
) DEFAULT CHARSET=utf8;
"""

DOWNGRADE_SQL = """
DROP TABLE IF EXISTS `client`;

DROP TABLE IF EXISTS `wealth_manager`;
"""


def upgrade():
    op.execute(UPGRADE_SQL)


def downgrade():
    op.execute(DOWNGRADE_SQL)
